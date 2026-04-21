# Pagina Asimetrica

## Stack
- **Frontend:** React 18 + Vite + Tailwind CSS + shadcn/ui
- **Router:** react-router-dom v7
- **Forms:** react-hook-form + zod
- **Animaciones:** framer-motion
- **Backend:** ~~PocketBase~~ eliminado — reemplazado por Web3Forms

## Estructura
```
apps/web/          # Frontend React/Vite
apps/pocketbase/   # Legado — ya no se usa en producción
```

## Comandos
```bash
npm run dev        # Dev server en localhost:3000
npm run build      # Build de producción → dist/apps/web
npm run lint       # Lint
```

## Formulario de contacto
- Colección `diagnosticos` migrada a **Web3Forms**
- Key en variable de entorno `VITE_WEB3FORMS_KEY`
- Archivo: `apps/web/src/components/ContactFormModal.jsx`

## Variables de entorno
```
VITE_WEB3FORMS_KEY=<key>   # API key de web3forms.com
```

## Hosting
- **Repo:** https://github.com/miguelrpo/pagina-asimetrica (privado)
- **Deploy:** GitHub Pages via GitHub Actions
- **URL:** https://miguelrpo.github.io/pagina-asimetrica
- **Workflow:** `.github/workflows/deploy.yml` — corre en cada push a `main`
- El secret `VITE_WEB3FORMS_KEY` debe estar en Settings → Secrets → Actions

## Notas
- `vite.config.js` usa `base: '/pagina-asimetrica/'` cuando corre en GitHub Actions
- El `.env` local no se sube al repo (está en `.gitignore`)
