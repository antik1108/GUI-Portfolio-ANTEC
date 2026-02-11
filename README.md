# GUI Portfolio Monorepo

An industry-style monorepo for a modern portfolio website built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## Structure

```
apps/
	web/                # Vite + React app
packages/
	ui/                 # Shared UI package (future)
	config/             # Shared config presets (future)
```

## Tech Stack

- React 18 + React Router
- Vite
- Tailwind CSS
- shadcn/ui + Radix UI
- TypeScript

## Setup

```bash
# Install all workspace dependencies
npm install

# Start the web app
npm run dev

# Build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Workspace Notes

- The web app lives in `apps/web`.
- Shared packages live in `packages/*` and can be wired in later.

## Development Tips

To run a command directly in the web app:

```bash
npm run dev -w @gui-portfolio/web
```
