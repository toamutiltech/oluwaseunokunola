# Contributing Guidelines

Thank you for contributing to the **Oluwaseun Adeolu Okunola Portfolio & Engineering Showcase** repository.

## Branch Naming Convention

Please use descriptive prefixes when creating branches:

- `feat/feature-name` — New feature or page component
- `fix/bug-description` — Bug fixes
- `refactor/component-name` — Code restructuring without behavior changes
- `test/test-description` — Adding or updating test suites
- `docs/doc-name` — Documentation improvements
- `ci/workflow-name` — GitHub Actions or build pipeline changes
- `chore/task-name` — Maintenance or dependency updates

## Conventional Commit Messages

We enforce **Conventional Commit** formatting for clear, automated git history:

- `feat: add project filtering capability`
- `fix: resolve mobile menu navigation alignment`
- `refactor: extract hero section component`
- `test: add component rendering test coverage`
- `docs: update installation instructions in README`
- `ci: configure automated quality pipeline`
- `chore: update dependencies via dependabot`

## Development Workflow

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/toamutiltech/oluwaseun.git
   cd oluwaseun
   npm ci
   ```

2. Run local development server:

   ```bash
   npm run dev
   ```

3. Perform Quality Verification Gate before opening a Pull Request:

   ```bash
   npm run lint
   npm run typecheck
   npm test
   npm run build
   ```

4. Create a Pull Request against `main`. All CI checks must pass before merging.
