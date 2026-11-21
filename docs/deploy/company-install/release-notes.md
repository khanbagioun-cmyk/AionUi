Unsigned internal Dastyar installers built from one commit on GitHub-hosted runners.

## Targets

- `dastyar-2.2.2-mac-arm64-unsigned.dmg` — macOS Apple Silicon
- `dastyar-2.2.2-mac-x64-unsigned.dmg` — macOS Intel
- `dastyar-2.2.2-win-x64-unsigned.exe` — Windows 11 x64

## Before installing

1. Verify the installer against `SHA256SUMS` (`verify.md`).
2. Read `README.md` and the per-OS install page.
3. macOS: remove quarantine with `xattr -dr com.apple.quarantine /Applications/Dastyar.app`.
4. Windows: `Unblock-File`, then expect SmartScreen → More info → Run anyway.
5. Enter the company Zharfa key once in Settings → Models; endpoint and model are prefilled.

## Limitations

- Unsigned and unnotarized; no automatic updates and no update service.
- No bundled model key.
- macOS arm64, macOS x64 and Windows x64 only; no Linux desktop build.
- Dastyar runs beside AionUi with separate data and locks; migration is optional.

Report the OS version, architecture, installer name, checksum and first failing step with any issue.
