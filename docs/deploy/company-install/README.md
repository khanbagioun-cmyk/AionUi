# Dastyar company install package

Unsigned internal Dastyar installers. Dastyar runs beside AionUi with its own
bundle ID, profile, data directory and single-instance lock.

## Targets

| Installer                              | OS                                                    |
| -------------------------------------- | ----------------------------------------------------- |
| `dastyar-2.2.2-mac-arm64-unsigned.dmg` | macOS 12+ Apple Silicon                               |
| `dastyar-2.2.2-mac-x64-unsigned.dmg`   | macOS 12+ Intel (Rosetta 2 required on Apple Silicon) |
| `dastyar-2.2.2-win-x64-unsigned.exe`   | Windows 11 x64                                        |

Linux desktop is not built. Linux hosts can use the Web profile (`dastyar-web`).

## Before installing

1. Download `SHA256SUMS` and the installer to the same folder.
2. Verify the installer with [verify.md](verify.md) / [verify.zh.md](verify.zh.md).
3. Follow [macos.md](macos.md) / [macos.zh.md](macos.zh.md) or
   [windows.md](windows.md) / [windows.zh.md](windows.zh.md).
4. Enter the company Zharfa key once in Settings → Models ([key.md](key.md) /
   [key.zh.md](key.zh.md)).

The first launch needs the one-time Gatekeeper or SmartScreen bypass described
on the OS page. Builds are unsigned and unnotarized.

## Limitations

- No code signing, notarization, auto-update or update service.
- Model key is not bundled.
- A key is entered once per install; it is stored in the local profile.
- macOS arm64, macOS x64 and Windows x64 only.

## Other pages

- [uninstall.md](uninstall.md) / [uninstall.zh.md](uninstall.zh.md)
- [vm.md](vm.md) / [vm.zh.md](vm.zh.md)
- [migration.md](migration.md) / [migration.zh.md](migration.zh.md)
- [troubleshooting.md](troubleshooting.md) / [troubleshooting.zh.md](troubleshooting.zh.md)
