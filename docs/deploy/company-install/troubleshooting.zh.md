# 故障排查

## macOS 提示应用已损坏或来自未知开发者

清除隔离属性后重新启动：

```bash
xattr -dr com.apple.quarantine /Applications/Dastyar.app
open /Applications/Dastyar.app
```

若仍失败，确认校验值与 CPU 架构匹配。

## 在 Apple Silicon 上运行 macOS x64 版本

一次性安装 Rosetta 2 后启动：

```bash
softwareupdate --install-rosetta --agree-to-license
```

## Windows SmartScreen 阻止安装

选择 **更多信息 → 仍要运行**。静默安装前先执行 `Unblock-File`。

## Windows 安装器提示目录被占用

关闭 Dastyar、安装目录中的终端或编辑器后重试。安装器也可弹出锁定报告对话框，列出占用进程。

## 模型请求失败

- 确认地址为 `https://api.zharfa.tech/v1`，模型为 `glm5_3-fp8`。
- 在“设置 → 模型”中重新输入密钥。
- 检查拦截 TLS 的代理证书是否受信任。
- 在下方日志中查看 HTTP 状态码。

## 日志

- macOS：`~/Library/Logs/Dastyar/`
- Windows：`%APPDATA%\Dastyar\logs\`

## AionUi 干扰

Dastyar 使用 `com.dastyar.app`、`Dastyar` 配置目录和 `dastyar://` 协议。若两个应用仍打开同一配置，检查 `DASTYAR_HOME` 和 `migration.md` 中的路径。
