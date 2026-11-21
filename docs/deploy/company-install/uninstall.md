# Uninstall

Uninstalling never touches AionUi.

## macOS

1. Quit Dastyar.
2. Move `/Applications/Dastyar.app` to the Trash.
3. Remove local data if no longer needed:

```bash
rm -rf "$HOME/Library/Application Support/Dastyar"
rm -rf "$HOME/Library/Logs/Dastyar"
```

## Windows

1. Quit Dastyar.
2. Open **Settings → Apps → Installed apps**, find Dastyar and choose
   **Uninstall**.
3. Or run the uninstaller silently:

```powershell
& "$env:LOCALAPPDATA\Programs\Dastyar\Uninstall Dastyar.exe" /S
```

4. Remove the profile if no longer needed:

```powershell
Remove-Item -Recurse -Force "$env:APPDATA\Dastyar"
```

Data lives under the `Dastyar` profile directory, never under `AionUi`.
