## Patricia P. Gundelfingen – Portfolio Website

I'm a Multimedia Design student at SEA – Syddansk Erhvervsakademi, focused on frontend development and UX/UI. This website presents my projects, skills and background, and lets visitors download my CV or get in touch directly.


Live Website: https://patricia-portfolio-website.web.app/

GitHub Repository: https://github.com/Patricia-P-G/Portfolio-Website

## Features

- **Project showcase** – project cards with a detail modal, image gallery, tech tags, and live/GitHub links
- **Home page slider** – featured projects in a responsive Swiper carousel
- **Skills overview** – technologies grouped by category (Frontend, APIs, Tools, Database, Design)
- **Contact form** – sends messages directly via EmailJS, with input validation
- **Resume access** – downloadable PDF CV and a video CV
- **Animations** – scroll-triggered entry animations with Anime.js, respecting `prefers-reduced-motion`
- **Responsive design** – layouts for mobile, tablet and desktop, with a mobile navigation menu

## Tech Stack

| Category | Tools |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Build tool | Vite |
| Styling | Tailwind CSS v4 |
| Routing | Vue Router |
| Animations | Anime.js |
| Slider | Swiper |
| SEO | @unhead/vue |
| Contact form | EmailJS |
| Hosting | Firebase Hosting |
| Code quality | ESLint, Oxlint |

## Accessibility, SEO & Performance

- Semantic HTML with a logical heading structure
- `aria-label` on icon-only buttons and links; decorative icons hidden from screen readers
- Keyboard support for the project modal (Escape to close, focus restored on close)
- Reduced-motion support for users who prefer less animation
- Page-specific titles, meta descriptions, Open Graph tags and canonical URLs on every route
- Images converted to WebP and lazy-loaded below the fold
- Audited with Lighthouse

## Project Structure

```
src/
├── assets/            # Images and icons
├── components/        # Reusable UI components (Navbar, Hero, ProjectCard, ProjectModal, ...)
│   └── modules/       # Composables with project and skill data (useProjects, useSkills)
├── router/            # Vue Router configuration
├── views/             # Pages: Home, About, Skills, Projects, Contact
├── App.vue
├── main.js
└── style.css
```

## Getting Started

**Requirements:** Node.js 20.19+ or 22.12+

```bash
# Clone the repository
git clone https://github.com/Patricia-P-G/Portfolio-Website.git
cd Portfolio-Website

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment variables

The contact form uses EmailJS. Create a `.env` file in the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the code with Oxlint and ESLint |
| `npm run format` | Format the code with Oxfmt |

## Deployment

The site is hosted on Firebase Hosting:

```bash
npm run build
firebase deploy
```

## Contact

- **Email:** [patriciapuienaru@gmail.com](mailto:patriciapuienaru@gmail.com)
- **LinkedIn:** [patricia-gundelfingen](https://www.linkedin.com/in/patricia-gundelfingen/)
- **GitHub:** [Patricia-P-G](https://github.com/Patricia-P-G)

I'm currently open to frontend development internship opportunities.
