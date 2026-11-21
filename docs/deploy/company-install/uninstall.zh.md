# 卸载

卸载不会影响 AionUi。

## macOS

1. 退出 Dastyar。
2. 将 `/Applications/Dastyar.app` 移到废纸篓。
3. 如需删除本地数据：

```bash
rm -rf "$HOME/Library/Application Support/Dastyar"
rm -rf "$HOME/Library/Logs/Dastyar"
```

## Windows

1. 退出 Dastyar。
2. 打开 **设置 → 应用 → 已安装的应用**，找到 Dastyar 并选择 **卸载**。
3. 或静默运行卸载程序：

```powershell
& "$env:LOCALAPPDATA\Programs\Dastyar\Uninstall Dastyar.exe" /S
```

4. 如不再需要配置：

```powershell
Remove-Item -Recurse -Force "$env:APPDATA\Dastyar"
```

数据保存在 `Dastyar` 配置目录，不会写入 `AionUi`。
