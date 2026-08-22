# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2026-08-22

### Added
- **Zod Schema Input Validation**: Added `src/lib/validation.ts` (`contactFormSchema`) with inline error messages for Contact component boundaries.
- **Expanded Component Unit Test Suites**: Added isolated test specs in `src/components/sections/__tests__/` (`Contact.test.tsx`, `Navigation.test.tsx`, `Hero.test.tsx`, `Skills.test.tsx`, `Projects.test.tsx`).
- **One-Command Docker Compose**: Added `docker-compose.yml` mapping single `web` service on port 3000 and added `npm run docker:up` script.
- **Prettier Code Formatting Guardrails**: Added `.prettierrc`, `.prettierignore`, and `Format Check` step in GitHub Actions CI.

## [1.0.0] - 2026-08-22

### Added
- **Automated Testing Suite**: Vitest + React Testing Library integration with component & user interaction tests.
- **CI/CD Pipeline**: GitHub Actions workflow for automated linting, typechecking, testing, security auditing, and building.
- **Dependabot Integration**: Automated weekly npm dependency security vulnerability monitoring.
- **TypeScript Architecture**: Strict interfaces for `Project`, `Skill`, `Experience`, `LeadershipData`, and `Certification`.
- **Environment & Security Docs**: Added `.env.example`, `.dockerignore`, `Dockerfile`, `CONTRIBUTING.md`, and `CHANGELOG.md`.

### Changed
- **Modular Component Architecture**: Decomposed monolithic 595-line `page.tsx` into 10 single-responsibility section components.
- **Data & UI Separation**: Extracted inline constants into typed modules in `src/data/`.
