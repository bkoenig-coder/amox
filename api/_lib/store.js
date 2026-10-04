// Tiny JSON storage layer.
//  - On Vercel (BLOB_READ_WRITE_TOKEN present) data lives in a Vercel Blob store.
//  - Locally it falls back to ./.data so `npm run dev` works with no accounts.
import { promises as fs } from 'node:fs';
import path from 'node:path';

const useBlob = Boolean(process.env.BLOB_READ_WRITE_TOKEN);
const ACCESS = process.env.BLOB_ACCESS === 'public' ? 'public' : 'private';
const DATA_DIR = path.join(process.cwd(), '.data');

let blobLib;
const blob = async () => (blobLib ??= await import('@vercel/blob'));

const safe = (p) => {
  if (!/^[a-zA-Z0-9/_.-]+$/.test(p) || p.includes('..')) throw new Error('Bad path');
  return p;
};

export const storageMode = () => (useBlob ? 'vercel-blob (' + ACCESS + ')' : 'local-file');

export async function readJson(pathname) {
  safe(pathname);
  if (useBlob) {
    const { get } = await blob();
    const res = await get(pathname, { access: ACCESS, useCache: false });
    if (!res || res.statusCode !== 200) return null;
    return JSON.parse(await new Response(res.stream).text());
  }
  try {
    return JSON.parse(await fs.readFile(path.join(DATA_DIR, pathname), 'utf8'));
  } catch (e) {
    if (e.code === 'ENOENT') return null;
    throw e;
  }
}

// Returns false when overwrite is false and the file already exists.
export async function writeJson(pathname, data, { overwrite = true } = {}) {
  safe(pathname);
  const body = JSON.stringify(data);
  if (useBlob) {
    const { put } = await blob();
    try {
      await put(pathname, body, {
        access: ACCESS,
        addRandomSuffix: false,
        allowOverwrite: overwrite,
        contentType: 'application/json',
        cacheControlMaxAge: 60
      });
      return true;
    } catch (e) {
      if (!overwrite && /already exists/i.test(String((e && e.message) || ''))) return false;
      throw e;
    }
  }
  const file = path.join(DATA_DIR, pathname);
  await fs.mkdir(path.dirname(file), { recursive: true });
  try {
    await fs.writeFile(file, body, { flag: overwrite ? 'w' : 'wx' });
    return true;
  } catch (e) {
    if (e.code === 'EEXIST') return false;
    throw e;
  }
}

export async function listPaths(prefix) {
  safe(prefix);
  if (useBlob) {
    const { list } = await blob();
    const out = [];
    let cursor;
    do {
      const page = await list({ prefix, cursor, limit: 1000 });
      out.push(...page.blobs.map((b) => b.pathname));
      cursor = page.hasMore ? page.cursor : undefined;
    } while (cursor);
    return out;
  }
  const dir = path.join(DATA_DIR, prefix);
  try {
    const names = await fs.readdir(dir, { withFileTypes: true });
    const base = prefix.endsWith('/') ? prefix : prefix + '/';
    return names.filter((n) => n.isFile()).map((n) => base + n.name);
  } catch (e) {
    if (e.code === 'ENOENT') return [];
    throw e;
  }
}

export async function removePath(pathname) {
  safe(pathname);
  if (useBlob) {
    const { del } = await blob();
    await del(pathname);
    return;
  }
  await fs.rm(path.join(DATA_DIR, pathname), { force: true });
}
