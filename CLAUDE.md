# Summary
This is a project for students to learn react. It works with a backend to create a tiny blogging platform. It uses Vite to build/dev and oxlint as the linter.

## Commands
`pnpm dev`: run the dev server (uses vite)
`pnpm build`: builds for production (uses vite)
`pnpm lint`: runs Oxlint
`pnpm preview`: runs the preview server (uses vite)

## Structure
- `src/components/` holds one component per file (PascalCase, jsx)
- `src/App.jsx` root component
- `src/assests` holds imported images

## Conventions
- Funcion components, no class components.
- Keep components small and focused

## Rules
- Use pnpm only! Never use any other package manager or create a lock file that is not pnpm-lock.yaml.
- Do not edit files in the `node_modules/` or `dist/` folders.
- Always ask before adding a new package.
- Run `pnpm lint` and `pnpm build` before finishing a task