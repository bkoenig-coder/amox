import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Runs the Vercel-style handlers in /api during `npm run dev`, so events and
// registrations work locally without any account (data goes to ./.data).
function localApi(): Plugin {
  return {
    name: 'amox-local-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url || '/', 'http://localhost');
        const match = url.pathname.match(/^\/api\/([a-z]+)$/);
        if (!match) return next();
        try {
          const mod = await server.ssrLoadModule(`/api/${match[1]}.js`);
          const chunks: Buffer[] = [];
          for await (const c of req) chunks.push(c as Buffer);
          const raw = Buffer.concat(chunks).toString('utf8');
          let body: unknown = undefined;
          if (raw) {
            try { body = JSON.parse(raw); } catch { body = undefined; }
          }
          (req as any).body = body;
          await mod.default(req, res);
        } catch (err) {
          console.error('[api]', err);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'API error (see terminal)' }));
        }
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // make .env.local values (ADMIN_PASSWORD, ...) visible to the local API
  Object.assign(process.env, { ...loadEnv(mode, process.cwd(), ''), ...process.env });
  return {
    plugins: [react(), localApi()],
    server: {
      port: 5173,
      host: true
    }
  };
});
