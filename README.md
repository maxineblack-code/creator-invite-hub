# Creator Invite Hub (React + Vite + Tailwind)

A polished, mobile‑first landing page for inviting creators to your fashion show.

## Quick deploy (no terminal)
1. Create a **GitHub** account (if you don't have one).
2. Make a new repository named `creator-invite-hub`.
3. Click **Add file → Upload files** and upload the *contents* of this folder (keep the folder structure).
4. Go to **Vercel.com → Add New → Project → Import from GitHub**, pick your repo, and click **Deploy**.
5. You'll get a live URL like `https://creator-invite-hub.vercel.app`. Share this link in your DMs and from Shopify.

## Edit the text/links
- Open `src/components/CreatorInviteHub.tsx` and change placeholders like `[Show Name]`, `[City]`, URLs for RSVP/Brief.
- Commit changes on GitHub; Vercel will redeploy automatically.

## Local preview (optional)
If you want to run it on your computer:
```bash
npm i
npm run dev
```

## Link from Shopify
- Shopify Admin → **Online Store → Navigation** → add a menu item named “Creator Invite” pointing to your Vercel URL.
- Or create a Shopify page and paste a link in the content, or embed as an `<iframe>` if you prefer.
