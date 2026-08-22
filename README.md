# Oluwaseun Adeolu Okunola — Engineering Showcase & Portfolio

[![CI Pipeline](https://github.com/toamutiltech/oluwaseun/actions/workflows/ci.yml/badge.svg)](https://github.com/toamutiltech/oluwaseun/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Tested%20with-Vitest-yellow?style=flat&logo=vitest)](https://vitest.dev/)
[![Zod](https://img.shields.io/badge/Schema%20Validation-Zod-blue?style=flat&logo=zod)](https://zod.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A production-grade, highly optimized, and modular Next.js application showcasing software engineering expertise, SaaS products, DevSecOps certifications, Zod input validation schemas, and technical projects.

---

## 🏗 Architecture & Design System

The application follows a decoupled component-driven architecture separating **Data**, **Types**, **Schema Validation**, **Presentation Logic**, and **Layout Composition**:

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
      └── Contact Section    (src/components/sections/Contact.tsx + Zod Validation Schema)
            │
            ▼
    Typed Data Modules & Zod Schema (src/data/*.ts + src/lib/validation.ts)
```

---

## 🛠 Technology Stack

- **Framework**: Next.js 15 (App Router with Turbopack)
- **Library**: React 19
- **Language**: TypeScript 5
- **Schema Validation**: Zod (`contactFormSchema`)
- **Styling**: Tailwind CSS v4 & Glassmorphism design tokens
- **Testing**: Vitest + React Testing Library (`@testing-library/react`)
- **Formatting**: Prettier
- **CI/CD**: GitHub Actions (`.github/workflows/ci.yml`) & Dependabot
- **Containerization**: Docker Compose (`docker-compose.yml`) & multi-stage `Dockerfile`

---

## 📁 Repository Structure

```
oluwaseun/
├── .github/
│   ├── workflows/
│   │   └── ci.yml             # GitHub Actions Quality Pipeline
│   └── dependabot.yml         # Automated dependency monitoring
├── public/                    # Static assets & images
├── src/
│   ├── app/
│   │   ├── __tests__/         # Page integration test suite
│   │   │   └── page.test.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── sections/          # Decomposed UI section components
│   │       ├── __tests__/     # Component unit test suites
│   │       │   ├── Contact.test.tsx
│   │       │   ├── Hero.test.tsx
│   │       │   ├── Navigation.test.tsx
│   │       │   ├── Projects.test.tsx
│   │       │   └── Skills.test.tsx
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
│   ├── lib/                   # Input validation schema
│   │   └── validation.ts      # Zod contactFormSchema definition
│   └── types/                 # Strict TypeScript interface definitions
├── .env.example               # Environment variables specification
├── .prettierrc                # Prettier configuration
├── CONTRIBUTING.md            # Contribution guidelines & Git rules
├── CHANGELOG.md               # Versioning history
├── Dockerfile                 # Production multi-stage Docker build
├── docker-compose.yml         # One-command Docker Compose orchestration
├── package.json
└── vitest.config.ts           # Vitest configuration
```

---

## 🚀 Getting Started (One-Command Reproduction)

### Option 1: One-Command Docker Compose Startup
Run the entire application in a production-ready isolated container:
```bash
npm run docker:up
# OR
docker compose up --build
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Option 2: Local Development Setup

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

---

## 🧪 Quality Verification Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Launch local development server with Turbopack |
| `npm run build` | Compile Next.js production build |
| `npm run lint` | Run Next.js & ESLint checks |
| `npm run typecheck` | Run strict TypeScript compiler verification (`tsc --noEmit`) |
| `npm test` | Execute Vitest component test suites |
| `npm run test:coverage` | Run Vitest test coverage audit |
| `npm run format:check` | Check code formatting with Prettier |
| `npm run docker:up` | Launch application via Docker Compose on port 3000 |

---

## 🤝 Contributing & Guidelines

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for branch naming conventions, Conventional Commit formatting rules, and pull request procedures.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
