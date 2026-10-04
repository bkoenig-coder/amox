# Events & registration — setup

The site has an events page (`/events`) where people register with their full name, phone and
e-mail, and an admin page (`/admin`) where you add events and download the registrations.
It needs **no Supabase, no Microsoft account** — only the Vercel project the site already runs on.

## One-time setup on Vercel (about 3 minutes)

1. **Create a Blob store** — Vercel dashboard → your project → *Storage* → *Create* → *Blob*.
   Choose **Private** access and connect it to this project. Vercel adds `BLOB_READ_WRITE_TOKEN`
   automatically. (If you can only create a Public store, also add the env var `BLOB_ACCESS=public`;
   registrations are still saved under an unguessable path.)
2. **Set the admin password** — *Settings* → *Environment Variables* → add `ADMIN_PASSWORD`
   (pick a long one) for Production (and Preview if you use it).
3. **Redeploy.** Open `https://<your-site>/admin`, sign in, add an event.

Changing `ADMIN_PASSWORD` later changes where registrations are stored, so pick it once and keep it.
If you must change it, download the CSVs first.

## Using it

- `/admin` → *Шинэ арга хэмжээ нэмэх*: title, date, optional time, place, description, optional capacity.
- *Бүртгэл* shows the people registered for an event and **CSV татах** exports them (opens in Excel).
- Untick *Бүртгэл нээлттэй* to close registration; the page also closes it automatically when full.
- Events added here show up on the home page agenda and on `/events`.
  Until the first event is added, the home page shows the built-in sample events.

## Local development

`npm run dev` runs the same API locally and keeps data in `./.data` (git-ignored).
The local admin password is `admin` unless you set `ADMIN_PASSWORD` in `.env.local`.

## Notes

- Registrations contain personal data (name, phone, e-mail). The form asks for consent and says the
  data is used only for organising the event. Delete registrations after the event, and mention this
  in your privacy notice (Impressum / Datenschutz).
- The same e-mail address can only register once per event.
- Basic spam protection: hidden honeypot field and a per-IP rate limit.
