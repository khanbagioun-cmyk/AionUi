# Migrate from AionUi

Dastyar starts empty. Copy data only when you want the old profile.

| Item           | AionUi                                        | Dastyar                                        |
| -------------- | --------------------------------------------- | ---------------------------------------------- |
| macOS data     | `~/Library/Application Support/AionUi/aionui` | `~/Library/Application Support/Dastyar/home`   |
| macOS config   | `~/Library/Application Support/AionUi/config` | `~/Library/Application Support/Dastyar/config` |
| Windows data   | `%APPDATA%\AionUi\aionui`                     | `%APPDATA%\Dastyar\home`                       |
| Windows config | `%APPDATA%\AionUi\config`                     | `%APPDATA%\Dastyar\config`                     |

## Copy a profile

1. Quit AionUi and Dastyar.
2. Start Dastyar once and quit it, so the target directories exist.
3. Copy the contents, not the directories:

```bash
# macOS
cp -R "$HOME/Library/Application Support/AionUi/aionui/." "$HOME/Library/Application Support/Dastyar/home/"
cp -R "$HOME/Library/Application Support/AionUi/config/." "$HOME/Library/Application Support/Dastyar/config/"
```

```powershell
# Windows
Copy-Item "$env:APPDATA\AionUi\aionui\*" "$env:APPDATA\Dastyar\home\" -Recurse
Copy-Item "$env:APPDATA\AionUi\config\*" "$env:APPDATA\Dastyar\config\" -Recurse
```

4. Start Dastyar and confirm history and settings. The key may need re-entry.

## Share state deliberately

Copying gives two independent profiles; later changes do not sync. To make both
apps use the same data directory, point one app at the other's data path with
`DASTYAR_HOME` (Dastyar) and run only one app at a time, because the SQLite
database has a single writer. AionUi and Dastyar single-instance locks are
separate, so the lock will not stop a second process from opening the same DB.
