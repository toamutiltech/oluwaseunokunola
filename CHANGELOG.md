# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-08-22

### Added
- **Automated Testing Suite**: Vitest + React Testing Library integration with component & user interaction tests.
- **CI/CD Pipeline**: GitHub Actions workflow for automated linting, typechecking, testing, security auditing, and building.
- **Dependabot Integration**: Automated weekly npm dependency security vulnerability monitoring.
- **TypeScript Architecture**: Strict interfaces for `Project`, `Skill`, `Experience`, `LeadershipData`, and `Certification`.
- **Environment & Security Docs**: Added `.env.example`, `.dockerignore`, `Dockerfile`, `CONTRIBUTING.md`, and `CHANGELOG.md`.

### Changed
- **Modular Component Architecture**: Decomposed monolithic 595-line `page.tsx` into 10 single-responsibility section components (`Navigation`, `Hero`, `About`, `Skills`, `ExperienceSection`, `Leadership`, `ProjectsSection`, `Certifications`, `Contact`, `Footer`).
- **Data & UI Separation**: Extracted inline constants into typed modules in `src/data/` (`projects.ts`, `skills.ts`, `experience.ts`, `leadership.ts`, `certifications.ts`).
- **Standardized Scripts**: Added `test`, `test:watch`, and `typecheck` commands to `package.json`.
