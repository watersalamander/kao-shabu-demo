# KAO Shabu-Grill — Staff App (MVP)

Back-of-house (kitchen) app demo for the KAO Shabu-Grill pitch. Runnable, self-contained,
faithful to the original Claude Design mockup — with the real food photos and 4-language UI.

## What it does
- **Prep station** — incoming orders as cards with table no., live age timer (green → amber → red),
  NEW pulse, per-item check-off, and "all plated → ready".
- **Runner** — orders that are ready to serve, shown as a plate grid with a big Delivered button.
- **Admin** — toggle item availability (sold-out) and a live per-table tally.
- **4 languages** for kitchen staff: Burmese (default), Lao, Thai, English.
- **Live demo loop** — a new order is injected every 15s with a sound alert (toggle in the top bar).

## Run it
Any static server works. Easiest:

```
cd D:\Kao-shabu
python -m http.server 4173
```

Then open http://localhost:4173 (best at ≥1200px width — it's a tablet/desktop kitchen screen).

> Must be served over http:// (not opened as a file://) so the menu data and photos load.

## Files
- `index.html` — the whole app (React via CDN, no build step).
- `data.js`    — menu + translations, extracted verbatim from the design.
- `assets/`    — logo + 20 food photos.

## Notes for going past the demo
This is a front-end prototype with simulated orders (no backend). To make it real:
orders would come from the customer ordering app / POS via a small API + websocket,
and "ready/delivered/sold-out" state would persist server-side.
