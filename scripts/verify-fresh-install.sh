#!/usr/bin/env bash
set -e

echo "==> Clearing local cache and node_modules..."
rm -rf node_modules .next

echo "==> Running clean npm ci installation..."
npm ci

echo "==> Running strict TypeScript compiler check..."
npm run typecheck

echo "==> Executing Vitest test suite and coverage audit..."
npm run test:coverage

echo "==> Compiling Next.js production build..."
npm run build

echo "==> Fresh install verification completed successfully!"
