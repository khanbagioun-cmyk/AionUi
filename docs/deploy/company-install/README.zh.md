# Dastyar 公司安装包

未签名的内部 Dastyar 安装包。Dastyar 可与 AionUi 并存，使用独立 bundle ID、配置、数据目录和单实例锁。

## 目标平台

| 安装包                                 | 操作系统                                          |
| -------------------------------------- | ------------------------------------------------- |
| `dastyar-2.2.2-mac-arm64-unsigned.dmg` | macOS 12+ Apple Silicon                           |
| `dastyar-2.2.2-mac-x64-unsigned.dmg`   | macOS 12+ Intel（Apple Silicon 上需要 Rosetta 2） |
| `dastyar-2.2.2-win-x64-unsigned.exe`   | Windows 11 x64                                    |

不构建 Linux 桌面版。Linux 主机可使用 Web 版本（`dastyar-web`）。

## 安装前

1. 将 `SHA256SUMS` 与安装包下载到同一目录。
2. 按 [verify.zh.md](verify.zh.md) / [verify.md](verify.md) 校验安装包。
3. 按 [macos.zh.md](macos.zh.md) / [macos.md](macos.md) 或 [windows.zh.md](windows.zh.md) / [windows.md](windows.md) 安装。
4. 在“设置 → 模型”中一次性输入公司 Zharfa 密钥（[key.zh.md](key.zh.md) / [key.md](key.md)）。

首次启动需要操作系统页面所述的一次性 Gatekeeper 或 SmartScreen 绕过。安装包未签名、未公证。

## 限制

- 无代码签名、公证、自动更新或更新服务。
- 不内置模型密钥。
- 每次安装只需输入一次密钥，密钥保存在本机配置中。
- 仅支持 macOS arm64、macOS x64 和 Windows x64。

## 其他页面

- [uninstall.zh.md](uninstall.zh.md) / [uninstall.md](uninstall.md)
- [vm.zh.md](vm.zh.md) / [vm.md](vm.md)
- [migration.zh.md](migration.zh.md) / [migration.md](migration.md)
- [troubleshooting.zh.md](troubleshooting.zh.md) / [troubleshooting.md](troubleshooting.md)
