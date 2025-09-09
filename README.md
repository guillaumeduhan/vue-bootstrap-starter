# 🦾 Vue 3 Bootstrap Starter

Last update: 9/9/25.

A modern boilerplate built with Vue 3 and Bootstrap 5. Includes Vue-Router, Pinia, Sass/SCSS, and ESLint — everything you need to kickstart your Vue project.

![logo](https://repository-images.githubusercontent.com/217154004/65cb3cfd-023f-4035-821a-ca5bf92cd433)

## ✨ Features

- 📦 Vue 3 + Vite setup
- 🛣️ Vue-Router for navigation
- 🗂️ Pinia for state management
- 🎨 Bootstrap 5 for responsive UI
- 🎨 Sass/SCSS support
- ✅ ESLint for code quality

## 📁 Project Structure

```plaintext
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   └── index.js
│   ├── styles/
│   │   └── main.scss
│   ├── App.vue
│   └── main.js
├── package.json
├── vite.config.js
└── .eslintrc.js
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/vue-bootstrap-starter.git
cd vue-bootstrap-starter
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Start the Development Server

```bash
npm run serve
# or
pnpm dev
```

The app will be available at [http://localhost:5173/](http://localhost:5173/).

## 🎨 Customization

- Update `src/styles/main.scss` to override Bootstrap variables and add custom styles.
- Add new routes in `src/router/index.js`.
- Manage global state with Pinia in `src/store/`.

## 📦 Building for Production

```bash
npm run build
# or
pnpm build
```

The production-ready files will be generated in the `dist/` directory.

## 🚀 Deployment

Deploy the `dist/` directory to your preferred platform:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## ❓ FAQ

### Why use this starter?

It combines Vue 3, Bootstrap 5, and Pinia with a ready-to-go structure for rapid development.

### Can I replace Bootstrap?

Yes, you can swap Bootstrap with TailwindCSS or another UI library by updating `main.scss`.

### Does it support TypeScript?

You can enable TypeScript by renaming `.js` files to `.ts` and updating `vite.config.js`.

## 👨‍💻 About the Creator

I'm Guillaume Duhan, CTO & indie builder. I've launched many projects using Vue, and this starter is a solid foundation for building modern Vue apps quickly.

## 📎 License

This project is licensed under the [MIT](LICENSE).
