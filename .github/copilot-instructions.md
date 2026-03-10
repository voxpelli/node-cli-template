# GitHub Copilot Instructions for Node CLI Template

## Related Templates (Choose the Right Template First)

This repository is a **GitHub Template Repo** for Node.js CLI tools.

| If you are building… | Pick this template |
|---|---|
| Command-line tools and terminal workflows | [`node-cli-template`](https://github.com/voxpelli/node-cli-template) |
| Web APIs, workers, long-running services | [`node-app-template`](https://github.com/voxpelli/node-app-template) |
| Reusable libraries published for import | [`node-module-template`](https://github.com/voxpelli/node-module-template) |

Default behavior in this repo: proceed in **CLI mode**.

## Fast Path

- Use **ESM only** (`import` / `export`)
- Keep command wiring in `cli.js` and CLI logic in `lib/`
- Write runtime tests in `test/*.spec.js` with `node:test` + `node:assert/strict`
- Write type tests in `typetests/*.tst.ts` with `tstyche`
- Validate with `npm test` before finalizing

## Commands

- `npm run husky-enable` - enable git hooks (opt-in)
- `npm run husky-disable` - disable git hooks
- `npm run test:node` - runtime tests with coverage
- `npm run check-type-tests` - type-level tests
- `npm test` - full checks + tests

Lockfile policy: this CLI template does not commit a lockfile by default (`package-lock=false` in `.npmrc`).

## Guardrails

### MUST

- Preserve CLI ergonomics (`bin`, help output, exit codes)
- Keep changes minimal and template-focused
- Keep docs aligned with actual scripts

### ASK FIRST

- Runtime dependency changes
- Public CLI interface changes (flags/commands/output)
- Large file moves or broad refactors

### NEVER

- Introduce CommonJS runtime code
- Claim validation without running it
- Leave template docs with stale commands
