# Portafolio - Daniel Perez

Portafolio profesional construido con **Next.js 14** y **CSS Global**.

## Stack

- **Next.js 14** - React framework con App Router
- **TypeScript** - Type safety
- **CSS Global** - Estilos responsivos sin frameworks

## Desarrollo Local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Deploy en Vercel

Este proyecto se despliega automáticamente en Vercel cuando haces push a la rama `main`.

[Ir al sitio en línea](https://portafolio-daniel-perez.vercel.app)

## Estructura

```
├── app/
│   ├── globals.css      # Estilos globales
│   ├── layout.tsx       # Layout raíz
│   └── page.tsx         # Página principal
├── components/
│   ├── Hero.tsx         # Sección Hero
│   ├── Projects.tsx     # Proyectos
│   ├── Skills.tsx       # Skills
│   └── Contact.tsx      # Contacto
└── public/              # Assets estáticos
```

## Personalizacion

- Edita los componentes en `components/`
- Ajusta estilos en `app/globals.css`
- Modificá metadata en `app/layout.tsx`
