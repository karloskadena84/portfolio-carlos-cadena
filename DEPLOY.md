# Cómo publicar el portafolio

## Opción A — Vercel (recomendada)

1. https://vercel.com → entra con GitHub
2. Add New → Project → importa `karloskadena84/portfolio-carlos-cadena`
3. Framework Vite, build `npm run build`, output `dist`
4. Deploy

## Opción B — Subir código completo desde el ZIP

```bash
unzip portfolio-landing.zip
cd portfolio
git init
git remote add origin https://github.com/karloskadena84/portfolio-carlos-cadena.git
git add .
git commit -m "Portafolio Carlos Cadena"
git branch -M main
git push -u origin main --force
```

Luego importa en Vercel.

Repo: https://github.com/karloskadena84/portfolio-carlos-cadena
