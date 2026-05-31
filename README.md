# Portfolio_alitago

Portfolio personal de Angel Luis Litago Falces, desarrollado con Next.js para presentar perfil profesional, proyectos reales, servicios, experiencia y vias de contacto.

## Demo

[portfolio-alitago.vercel.app](https://portfolio-alitago.vercel.app/)

## Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- CSS modular por secciones
- [Vercel](https://vercel.com/) para despliegue
- [EmailJS](https://www.emailjs.com/) para el formulario de contacto
- Swiper para carruseles

## Funcionalidades

- Portfolio bilingue en espanol e ingles.
- Cambio de tema claro/oscuro.
- Secciones de inicio, sobre mi, trayectoria, habilidades, servicios, proyectos, aportes y contacto.
- Proyectos publicos con enlaces a GitHub y casos privados sin enlaces falsos.
- Formulario de contacto integrado con EmailJS.
- Sitemap, robots y metadata preparados para Next.js App Router.
- Imagenes optimizadas con `next/image` en secciones clave.

## Estructura

La aplicacion Next.js esta dentro de la carpeta `App/`.

```text
.
|-- App/
|   |-- src/
|   |   |-- app/
|   |   |-- components/
|   |   |-- styles/
|   |   `-- translations/
|   |-- public/
|   |-- package.json
|   `-- README.md
|-- Assets/
`-- README.md
```

## Instalacion Local

Requisitos:

- Node.js `22.x`
- npm

Instala dependencias y arranca el entorno de desarrollo desde `App/`:

```bash
cd App
npm install
npm run dev
```

Despues abre `http://localhost:3000`. Si el puerto esta ocupado, Next.js propondra otro puerto disponible.

## Scripts

Ejecutar siempre desde `App/`:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: genera la build de produccion.
- `npm run start`: sirve la build de produccion.
- `npm run lint`: ejecuta ESLint.

## Variables De Entorno

El formulario de contacto usa EmailJS. Crea un archivo `.env.local` dentro de `App/` con estas variables:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key
```

Estas variables se leen en `App/src/components/sections/contact/Contact.jsx`.

## Deploy En Vercel

Configuracion recomendada:

- Framework Preset: `Next.js`
- Root Directory: `App`
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: dejar el valor por defecto de Next.js
- Node.js Version: `22.x`

Anade en Vercel las variables de entorno de EmailJS si quieres que el formulario de contacto funcione en produccion.

## Autor

Angel Luis Litago Falces

- Portfolio: [portfolio-alitago.vercel.app](https://portfolio-alitago.vercel.app/)
- GitHub: [alitfal](https://github.com/alitfal)
- LinkedIn: [alitago](https://www.linkedin.com/in/alitago)

## Enlaces Utiles

- [Repositorio](https://github.com/alitfal/Portfolio_alitago)
- [Demo en Vercel](https://portfolio-alitago.vercel.app/)
- [Documentacion de Next.js](https://nextjs.org/docs)
- [Documentacion de Vercel](https://vercel.com/docs)
- [Documentacion de EmailJS](https://www.emailjs.com/docs/)
