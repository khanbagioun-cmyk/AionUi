# 从 AionUi 迁移

Dastyar 默认从空配置开始。只有需要旧配置时才复制。

| 项目         | AionUi                                        | Dastyar                                        |
| ------------ | --------------------------------------------- | ---------------------------------------------- |
| macOS 数据   | `~/Library/Application Support/AionUi/aionui` | `~/Library/Application Support/Dastyar/home`   |
| macOS 配置   | `~/Library/Application Support/AionUi/config` | `~/Library/Application Support/Dastyar/config` |
| Windows 数据 | `%APPDATA%\AionUi\aionui`                     | `%APPDATA%\Dastyar\home`                       |
| Windows 配置 | `%APPDATA%\AionUi\config`                     | `%APPDATA%\Dastyar\config`                     |

## 复制配置

1. 退出 AionUi 和 Dastyar。
2. 先启动并退出一次 Dastyar，让目标目录存在。
3. 复制目录内容，而不是目录本身：

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

4. 启动 Dastyar，确认历史与设置。密钥可能需要重新输入。

## 有意共享状态

复制后得到两个独立配置，之后互不同步。若要让两个应用使用同一数据目录，可用 `DASTYAR_HOME` 让 Dastyar 指向 AionUi 的数据路径，并且一次只运行一个应用，因为 SQLite 数据库只有一个写入者。AionUi 与 Dastyar 的单实例锁彼此独立，锁不会阻止第二个进程打开同一数据库。
