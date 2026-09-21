# Nuestro Universo

Una experiencia web romántica e inmersiva para recorrer recuerdos, mensajes y una carta dentro de un universo visual hecho a medida.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/nuestro-universo/src/App.tsx` — experiencia de una sola página, navegación, interacciones y estados.
- `artifacts/nuestro-universo/src/index.css` — sistema visual, responsive y fallback 2D sin dependencia de WebGL.
- `artifacts/nuestro-universo/src/data/universo.ts` — configuración personal, recuerdos, timeline, galería, notas y canción.
- `artifacts/nuestro-universo/public/media/` — carpeta destinada a las fotos y el audio reales.

## Architecture decisions

- La experiencia es frontend-only: el contenido personal se edita en un módulo de datos y no requiere base de datos.
- El universo visual usa DOM/CSS y motion para que exista una versión elegante incluso sin WebGL.
- El audio se inicia solo después de la interacción de entrada y se controla desde un reproductor persistente.

## Product

- Pantalla de entrada cinematográfica con acceso explícito al universo.
- Mapa de descubrimientos, recuerdos con lightbox, timeline, galería, notas desplegables y carta.
- Contador en vivo desde la fecha configurable y navegación mínima por anclas.
- Respeta `prefers-reduced-motion` y mantiene controles accesibles en desktop y móvil.

## User preferences

- Mantener una estética surrealista, floral, cálida e íntima, evitando una landing comercial o una página romántica genérica.
- Mantener los datos personales fuera de los componentes para poder reemplazarlos fácilmente.

## Gotchas

- El build manual necesita `PORT` y `BASE_PATH`; el workflow de la app los inyecta automáticamente.
- Sustituir los valores entre corchetes y los archivos de `/media/` antes de compartir el regalo.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
