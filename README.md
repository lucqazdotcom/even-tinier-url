# Even Tinier URL

> *"A URL is a promise. It says: follow me, and I will take you somewhere. We believe that promise deserves to be expressed in as few characters as physically possible."*

A URL shortener frontend built with vanilla HTML, CSS, and JavaScript. Pairs with a backend API running at `localhost:8080`. This was just a
fun project taking a system design question and applying it.


## Features

- **Shorten** — paste a long URL and get a tiny one back
- **Retrieve** — enter a short code to look up the original URL
- **Copy** — one-click copy for both shortened and retrieved links

## Stack

- Vanilla HTML / CSS / JS — no build step, no frameworks
- Geist + Geist Mono fonts
- Connects to a REST backend at `http://localhost:8080`

## Getting Started

1. Start the backend API on port `8080` (see the backend repo)
2. Open `index.html` in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

## API

The frontend expects two endpoints on the backend:

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/new` | Create a short URL. Body: `{ "long_url": "..." }`. Returns `{ "short_url": "..." }` |
| `GET` | `/retrieve/:code` | Look up original URL. Returns `{ "long_url": "..." }` |

## Project Structure

```
even-tinier-url/
├── index.html        # Markup and page structure
├── styles.css        # All styling
└── scripts/
    └── main.js       # Fetch calls and DOM logic
```

---

Built in Toronto. Backed by my Grandmother.
