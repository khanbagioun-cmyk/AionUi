# Verify the download

Run these commands in the folder that contains the installer and `SHA256SUMS`.

## macOS

```bash
shasum -a 256 -c SHA256SUMS --ignore-missing
```

A passing line ends with `OK`. If a line says `FAILED`, delete the installer and
download it again.

## Windows PowerShell

```powershell
$expected = (Select-String -Path .\SHA256SUMS -Pattern 'dastyar-.*win-x64').Line.Split()[0]
$actual = (Get-FileHash .\dastyar-2.2.2-win-x64-unsigned.exe -Algorithm SHA256).Hash.ToLower()
if ($actual -ne $expected) { throw "Checksum mismatch" }
"OK $actual"
```

Check the file name in `SHA256SUMS` matches the downloaded installer. Never run
an installer whose hash differs.
