$ErrorActionPreference = "Stop"

Write-Host "==> Clearing local cache and node_modules..."
if (Test-Path "node_modules") { Remove-Item -Recurse -Force "node_modules" }
if (Test-Path ".next") { Remove-Item -Recurse -Force ".next" }

Write-Host "==> Running clean npm ci installation..."
npm ci

Write-Host "==> Running strict TypeScript compiler check..."
npm run typecheck

Write-Host "==> Executing Vitest test suite and coverage audit..."
npm run test:coverage

Write-Host "==> Compiling Next.js production build..."
npm run build

Write-Host "==> Fresh install verification completed successfully!"
