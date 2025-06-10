# Photo Gallery with Astro

A beautiful photo gallery website built with Astro, featuring PhotoSwipe lightbox, Supabase integration, and DaisyUI styling.

## Features

- 📸 **PhotoSwipe Integration**: Beautiful lightbox gallery with smooth transitions
- 🎨 **DaisyUI + Tailwind CSS**: Modern, responsive design with light/dark theme toggle
- 🗄️ **Supabase Integration**: Fetches images dynamically from your Supabase database
- ⚡ **Astro Framework**: Fast, modern static site generation
- 📱 **Responsive Design**: Works perfectly on all devices
- 🌙 **Theme Toggle**: Switch between light and dark themes
- 🖼️ **Lazy Loading**: Optimized image loading for better performance

## Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure environment variables:**
   Create a `.env` file in the root directory:

   ```env
   SUPABASE_URL=https://supabase.gaolamthuy.vn
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Database Setup:**
   Your Supabase database should have a table named `glt_album_website` with the following columns:

   - `id` (int, primary key)
   - `created_at` (timestamp)
   - `title` (text)
   - `url` (text)
   - `type` (text)

4. **Start development server:**

   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── Gallery.astro        # Main gallery component
│   │   └── ThemeToggle.astro    # Light/dark theme toggle
│   ├── layouts/
│   │   └── Layout.astro         # Base layout with PhotoSwipe
│   ├── lib/
│   │   └── supabase.ts          # Supabase client configuration
│   └── pages/
│       └── index.astro          # Homepage
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

## Technologies Used

- **[Astro](https://astro.build)** - Static site generator
- **[PhotoSwipe](https://photoswipe.com)** - Lightbox gallery library
- **[Supabase](https://supabase.com)** - Backend as a service
- **[DaisyUI](https://daisyui.com)** - Tailwind CSS component library
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework

## API Usage

The gallery fetches images from your Supabase database using:

```bash
curl 'https://supabase.gaolamthuy.vn/rest/v1/glt_album_website?select=*' \
  -H "apikey: SUPABASE_CLIENT_ANON_KEY" \
  -H "Authorization: Bearer SUPABASE_CLIENT_ANON_KEY"
```

## Customization

- **Gallery Grid**: Modify the grid layout in `src/components/Gallery.astro`
- **Themes**: Customize DaisyUI themes in `tailwind.config.js`
- **Image Limit**: Change the number of images fetched by modifying the `.limit(6)` in Gallery.astro
- **PhotoSwipe Options**: Customize lightbox behavior in `src/layouts/Layout.astro`

## License

MIT License

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
