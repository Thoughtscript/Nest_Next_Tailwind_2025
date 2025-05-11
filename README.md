# Nest_Next_Tailwind_2025

[![](https://img.shields.io/badge/nestjs-11.1.0-darkred.svg)](https://nestjs.com/)
[![](https://img.shields.io/badge/nextjs-15.3.2-black.svg)](https://nextjs.org/)
[![](https://img.shields.io/badge/tailwindcss-4.1-lightblue.svg)](https://tailwindcss.com/)

## Setup and Use

```bash
docker compose up
```

## Notes

1. **Nest.js** project initialization: `npm i -g @nestjs/cli` followed by `nest new project-name`.
2. **Next.js** project initialization: `npx create-next-app@latest`.
    * Tailwind is included in the **Next.js** distribution.
    * Note that `npm run lint` requires `Eslint`.
3. **Next.js** uses:
   * `page.tsx` in leiu of `index.js` (or the like). Akin to `__INIT__.py` and other file/dir-based routing conventions.
       * These are automatically injected into the client router (think **React Router Switch**).
4. **Next.js** *prefetching* vs `"use client"`:
   * **Next.js** will prefetch and render content Server Side by default (before returning the generated content).
   * `"use client"` allows React hooks to be used to call data within the client (after HTML content is returned).

## Endpoints

1. http://localhost:3000/prefetch_table
2. http://localhost:3000/client_table
3. https://localhost:8500/cities

## Resources and Links

1. https://nestjs.com/
2. https://nextjs.org/
3. https://tailwindcss.com/
4. https://github.com/Thoughtscript/x_team_css_in_js
5. https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side
6. https://swr.vercel.app/
7. https://nextjs.org/docs/pages/api-reference/components/image#priority
8. [Unsplash - Anders Jildén](https://unsplash.com/photos/low-angle-photography-of-gray-building-at-daytime-Sc5RKXLBjGg)