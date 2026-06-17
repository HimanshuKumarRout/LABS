# LABS Client

React + Vite frontend for LABS. Includes an MDX-powered documentation site with dark mode, local search, and live Sandpack code blocks.

## Prerequisites

- Node.js >= 18
- npm, yarn, or pnpm

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The app runs at `http://localhost:5173` with the Vite dev server.

## Scripts

| Command           | Description                 |
| ----------------- | --------------------------- |
| `npm run dev`     | Start Vite dev server       |
| `npm run build`   | Production build to `dist/` |
| `npm run preview` | Preview production build    |
| `npm run lint`    | Run ESLint                  |

## Project Structure

```
Client/
├── docs/
│   ├── DocsLayout.jsx      # All doc logic in one file
│   ├── sidebar.json        # Nav config
│   ├── docs.css            # Styles
│   └── docs/               # MDX content pages
├── src/
│   ├── App.jsx             # Routes
│   └── main.jsx            # Entry point
└── index.html
```

## Docs

Add pages by creating `.mdx` files under `docs/docs/` and adding entries to `docs/sidebar.json`.
