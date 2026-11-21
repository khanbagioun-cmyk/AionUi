# Troubleshooting

## macOS says the app is damaged or from an unknown developer

Clear quarantine, then launch again:

```bash
xattr -dr com.apple.quarantine /Applications/Dastyar.app
open /Applications/Dastyar.app
```

If it still fails, confirm the checksum and that the DMG matches the CPU
architecture.

## macOS x64 build on Apple Silicon

Install Rosetta 2 once, then launch:

```bash
softwareupdate --install-rosetta --agree-to-license
```

## Windows SmartScreen blocks the installer

Choose **More info → Run anyway**. For the silent path, run `Unblock-File`
first.

## Windows installer reports the folder is in use

Close Dastyar, any terminal or editor opened in the install folder, and retry.
The installer can also open a lock-report dialog with the blocking process.

## The model request fails

- Confirm the endpoint is `https://api.zharfa.tech/v1` and the model is
  `glm5_3-fp8`.
- Re-enter the key in Settings → Models.
- Check that a TLS-intercepting proxy is trusted.
- Check the app log (below) for the HTTP status.

## Logs

- macOS: `~/Library/Logs/Dastyar/`
- Windows: `%APPDATA%\Dastyar\logs\`

## AionUi interference

Dastyar uses `com.dastyar.app`, `Dastyar` profile directories and a `dastyar://`
scheme. If both apps still open the same profile, check `DASTYAR_HOME` and the
paths in `migration.md`.
