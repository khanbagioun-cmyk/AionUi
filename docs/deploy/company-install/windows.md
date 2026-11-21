# Windows install

Dastyar installs per user and does not touch an existing AionUi install.

1. Verify `SHA256SUMS` first.
2. Open PowerShell in the download folder and unblock the file:

```powershell
Unblock-File .\dastyar-2.2.2-win-x64-unsigned.exe
```

3. Install normally by double-clicking, or silently from PowerShell:

```powershell
Start-Process .\dastyar-2.2.2-win-x64-unsigned.exe -ArgumentList '/S' -Wait
```

`/S` installs per user without prompts. The default location is
`%LOCALAPPDATA%\Programs\Dastyar`.

4. Launch Dastyar from the Start menu.

For an interactive install, SmartScreen warns about an unknown publisher. Choose
**More info → Run anyway**. `Unblock-File` removes the "downloaded from the
internet" mark; SmartScreen may still warn because the build is unsigned.

An already installed AionUi keeps its own Start-menu entry, profile and data.
