# Livewire Network Solutions

Static marketing site for Livewire Network Solutions — network and physical security for homes and small businesses in Northeast Indiana.

## Stack

Plain static HTML + CSS + tiny JS. No build step, no framework. Ships straight from this folder to Netlify via GitHub.

## Files

```
index.html       — main page (all sections)
thanks.html      — post-submission confirmation page
styles.css       — all styling
script.js        — mobile menu + footer year
netlify.toml     — Netlify config (publish dir + headers)
robots.txt       — search engine directives
sitemap.xml      — sitemap for crawlers
```

## Deploy (GitHub → Netlify)

1. Push these files to the root of your GitHub repo.
2. In Netlify, connect the repo (Site settings → Build & deploy).
3. Build command: leave blank. Publish directory: `.` (already configured in `netlify.toml`).
4. Push to your main branch — Netlify auto-deploys on every push.

## Contact form

The form on `index.html` uses Netlify Forms (`data-netlify="true"`). On first deploy, Netlify detects it automatically — no extra setup needed. Submissions land in **Netlify dashboard → Forms**. Optional: turn on email notifications (Forms → Settings → Form notifications).

Honeypot anti-spam is built in via `netlify-honeypot="bot-field"`.

## Before going live

- [ ] Replace placeholder phone `(260) 555-0142` (in `index.html`, `thanks.html`)
- [ ] Replace placeholder email `hello@livewirenetworksolutions.com` (in `index.html`)
- [ ] Replace testimonials with real ones once you have signed-off quotes
- [ ] Confirm service area copy ("Fort Wayne & surrounding Northeast Indiana")
- [ ] Adjust the brand list in the "What we install & service" strip to match what you actually carry
- [ ] Add a custom domain in Netlify (Site settings → Domain management)

## Editing

Open any `.html` or `.css` file in a text editor. Push changes. Netlify rebuilds.

## Color palette

```
--bg          off-white   #f6f4ee
--slate       deep slate  #3d4f57   (primary)
--copper      warm orange #c2754a   (accent — physical security)
--sage        sage green  #8ea88a   (accent — networking)
```

Used consistently: copper = physical security and CTAs; sage = networking; slate = body text and primary buttons.
