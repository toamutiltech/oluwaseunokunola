# Oluwaseun Adeolu Okunola — Engineering Showcase & Portfolio

[![CI Pipeline](https://github.com/toamutiltech/oluwaseun/actions/workflows/ci.yml/badge.svg)](https://github.com/toamutiltech/oluwaseun/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Tested%20with-Vitest-yellow?style=flat&logo=vitest)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A production-grade, highly optimized, and modular Next.js application showcasing software engineering expertise, SaaS products, DevSecOps certifications, and technical projects.

---

## 🏗 Architecture & Design System

The application follows a decoupled component-driven architecture separating **Data**, **Types**, **Presentation Logic**, and **Layout Composition**:

```
Client Browser
      │
      ▼
 Next.js App Router (src/app/page.tsx - Composition Container)
      │
      ├── Navigation Section (src/components/sections/Navigation.tsx)
      ├── Hero Section       (src/components/sections/Hero.tsx)
      ├── About Section      (src/components/sections/About.tsx)
      ├── Skills Section     (src/components/sections/Skills.tsx)
      ├── Experience Section (src/components/sections/Experience.tsx)
      ├── Leadership Section (src/components/sections/Leadership.tsx)
      ├── Projects Section   (src/components/sections/Projects.tsx)
      ├── Certs Section      (src/components/sections/Certifications.tsx)
      └── Contact Section    (src/components/sections/Contact.tsx)
            │
            ▼
    Typed Data Modules (src/data/*.ts + src/types/*.ts)
```

---

## 🛠 Technology Stack

- **Framework**: Next.js 15 (App Router with Turbopack)
- **Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 & Glassmorphism design tokens
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library (`@testing-library/react`)
- **CI/CD**: GitHub Actions (`.github/workflows/ci.yml`) & Dependabot
- **Containerization**: Docker multi-stage build

---

## 📁 Repository Structure

```
oluwaseun/
├── .github/
│   ├── workflows/
│   │   └── ci.yml             # GitHub Actions Quality Pipeline
│   └── dependabot.yml         # Automated dependency monitoring
├── public/                    # Static assets & images
│   ├── images/
│   └── Oluwaseun-Adeolu-Okunola-International-CV.pdf
├── src/
│   ├── app/
│   │   ├── __tests__/         # Component & Integration test suites
│   │   │   └── page.test.tsx
│   │   ├── globals.css        # Core styling & glassmorphism tokens
│   │   ├── layout.tsx         # Root layout & SEO Metadata
│   │   └── page.tsx           # Page composition container (< 100 lines)
│   ├── components/
│   │   └── sections/          # Decomposed UI section components
│   │       ├── About.tsx
│   │       ├── Certifications.tsx
│   │       ├── Contact.tsx
│   │       ├── Experience.tsx
│   │       ├── Footer.tsx
│   │       ├── Hero.tsx
│   │       ├── Leadership.tsx
│   │       ├── Navigation.tsx
│   │       ├── Projects.tsx
│   │       └── Skills.tsx
│   ├── data/                  # Decoupled portfolio data modules
│   │   ├── certifications.ts
│   │   ├── experience.ts
│   │   ├── leadership.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   └── types/                 # Strict TypeScript interface definitions
│       ├── certification.ts
│       ├── experience.ts
│       ├── leadership.ts
│       ├── project.ts
│       └── skill.ts
├── .env.example               # Environment variables specification
├── .gitignore
├── CONTRIBUTING.md            # Contribution guidelines & Git rules
├── CHANGELOG.md               # Versioning history
├── Dockerfile                 # Production multi-stage Docker build
├── package.json
├── tsconfig.json
├── vitest.config.ts           # Vitest configuration
└── vitest.setup.ts            # DOM mock setup for testing
```

---

## 🚀 Getting Started (Fresh Clone Verification)

### Requirements
- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or higher

### Installation & Execution

1. Clone the repository:
   ```bash
   git clone https://github.com/toamutiltech/oluwaseun.git
   cd oluwaseun
   ```

2. Install dependencies:
   ```bash
   npm ci
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Quality Verification Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Launch local development server with Turbopack |
| `npm run build` | Compile Next.js production build |
| `npm run start` | Run compiled production server |
| `npm run lint` | Run Next.js & ESLint checks |
| `npm run typecheck` | Run strict TypeScript compiler verification (`tsc --noEmit`) |
| `npm test` | Execute Vitest component test suite |
| `npm run test:watch` | Run Vitest in interactive watch mode |

---

## 🐳 Docker Deployment

To build and run the production container locally:

```bash
# Build Docker image
docker build -t oluwaseun-portfolio .

# Run container on port 3000
docker run -p 3000:3000 oluwaseun-portfolio
```

---

## 🤝 Contributing & Git Discipline

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for branch naming conventions, Conventional Commit formatting rules, and pull request procedures.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
