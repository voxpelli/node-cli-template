# Node CLI Template

A GitHub template repo for node cli tools

<!--
[![npm version](https://img.shields.io/npm/v/@voxpelli/node-cli-template.svg?style=flat)](https://www.npmjs.com/package/@voxpelli/node-cli-template)
[![npm downloads](https://img.shields.io/npm/dm/@voxpelli/node-cli-template.svg?style=flat)](https://www.npmjs.com/package/@voxpelli/node-cli-template)
-->
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-7fffff?style=flat&labelColor=ff80ff)](https://github.com/neostandard/neostandard)
[![Module type: ESM](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![Types in JS](https://img.shields.io/badge/types_in_js-yes-brightgreen)](https://github.com/voxpelli/types-in-js)
[![Follow @voxpelli@mastodon.social](https://img.shields.io/mastodon/follow/109247025527949675?domain=https%3A%2F%2Fmastodon.social&style=social)](https://mastodon.social/@voxpelli)

## About This Template

This template is designed for **creating Node.js CLI tools**.

**When to use this template:**
- Building command-line tools and automation helpers
- Creating npm packages with a `bin` entrypoint
- Developing interactive terminal workflows

**Related templates:**
- **[node-module-template](https://github.com/voxpelli/node-module-template)** - For reusable npm libraries and utilities
- **[node-app-template](https://github.com/voxpelli/node-app-template)** - For web servers, REST APIs, and long-running services

**For detailed coding guidelines and GitHub Copilot instructions**, see [`.github/copilot-instructions.md`](.github/copilot-instructions.md)

## Install

### Globally

```sh
npm install -g @voxpelli/node-cli-template
```

### Locally

```sh
npm install -D @voxpelli/node-cli-template
```
## Testing

This template uses two complementary test layers:

- **Runtime tests** in `test/*.spec.js` using `node:test` and `node:assert/strict`
- **Type-level tests** in `typetests/*.tst.ts` using `tstyche`

Useful commands:

- `npm test` – full verification flow
- `npm run test:node` – runtime tests with c8 coverage
- `npm run check:2` – type-level contract tests

## Usage

```sh
node-cli-template --help
```

## Used by

* [`example`](https://example.com/) – used by this one to do X and Y

## Similar modules

* [`example`](https://example.com/) – is similar in this way

## See also

* [Announcement blog post](#)
* [Announcement tweet](#)
