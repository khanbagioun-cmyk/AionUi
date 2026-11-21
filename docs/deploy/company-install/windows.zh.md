# Windows 安装

Dastyar 按用户安装，不会影响已安装的 AionUi。

1. 先校验 `SHA256SUMS`。
2. 在下载目录打开 PowerShell 并解除文件锁定：

```powershell
Unblock-File .\dastyar-2.2.2-win-x64-unsigned.exe
```

3. 双击正常安装，或在 PowerShell 中静默安装：

```powershell
Start-Process .\dastyar-2.2.2-win-x64-unsigned.exe -ArgumentList '/S' -Wait
```

`/S` 会无提示地按用户安装，默认位置为 `%LOCALAPPDATA%\Programs\Dastyar`。

4. 从开始菜单启动 Dastyar。

交互安装时，SmartScreen 会提示未知发布者，选择 **更多信息 → 仍要运行**。`Unblock-File` 会移除网络下载标记；由于安装包未签名，SmartScreen 仍可能提示。

已安装的 AionUi 会保留自己的开始菜单项、配置和数据。
