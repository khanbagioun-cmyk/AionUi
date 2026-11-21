# Dastyar fork of AionUi

This repository is a branding fork of [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi)
(Apache-2.0). The original application and its installed data are not modified.

## Fork identity

| Item                 | Upstream                               | This fork                               |
| -------------------- | -------------------------------------- | --------------------------------------- |
| Product / executable | AionUi                                 | Dastyar                                 |
| Bundle ID            | com.aionui.app                         | com.dastyar.app                         |
| URL scheme           | aionui://                              | dastyar://                              |
| userData             | `~/Library/Application Support/AionUi` | `~/Library/Application Support/Dastyar` |
| Application home     | `<userData>/aionui`                    | `<userData>/home`                       |
| Default data symlink | `~/.aionui` (dev)                      | `~/.dastyar` (dev)                      |
| Web profile data     | `~/.aionui-web`                        | `~/.dastyar-web`                        |

The bundle ID, app name, userData path, application home and single-instance
lock differ, so both apps can be installed and run side by side with independent
settings, conversations and databases.

`DASTYAR_HOME` overrides the application home. The company model route is the
`Zharfa Company` preset (`https://api.zharfa.tech/v1`, `glm5_3-fp8`).

## Branding locations

- `package.json` — name, description, author
- `packages/desktop/electron-builder.yml` — appId, productName, executable, protocol
- `packages/desktop/src/renderer/index.html`, `public/manifest.webmanifest` — titles
- `packages/desktop/src/renderer/components/...` — titlebar, About and login wordmarks
- `packages/desktop/src/process/utils/deepLink.ts` — protocol scheme
- `resources/app.icns|ico|png`, `public/pwa/*` — Dastyar logo
- `packages/desktop/src/process/utils/utils.ts` — data, config and temp paths
- `packages/desktop/src/process/utils/configureChromium.ts` — packaged userData isolation
- `packages/desktop/src/renderer/utils/model/modelPlatforms.ts` — company model preset

## Build and install (macOS)

```bash
mise use node@24
bun install
bun run build-mac:arm64
```

The installer image is written to `out/`. Install the built app to
`/Applications`; leave `/Applications/AionUi.app` untouched. See
[docs/deploy/company-install](docs/deploy/company-install/README.md) for install,
key, uninstall and migration steps.

## Updates

Company builds have no update feed and no update service. Update by installing a
newer company build over the old one; the profile stays in place. Upstream
AionUi releases are not used as a feed.

## Syncing upstream

```bash
git fetch upstream
git merge upstream/main
```

Resolve conflicts in the branding files above. Re-run the identity tests and
rebuild after a merge.

## Attribution

Upstream code and assets remain Apache-2.0. The original `LICENSE` is retained.
The Dastyar name and logo are local additions for this fork.
