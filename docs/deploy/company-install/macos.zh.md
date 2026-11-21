# macOS 安装

Dastyar 安装到 `/Applications/Dastyar.app`，只使用自己的配置，AionUi 可继续保留。

1. 先校验 `SHA256SUMS`。
2. 按 Mac 选择安装包：
   - Apple Silicon：`dastyar-2.2.2-mac-arm64-unsigned.dmg`
   - Intel：`dastyar-2.2.2-mac-x64-unsigned.dmg`
   - 在 Apple Silicon 上运行 x64 版本需要一次性安装 Rosetta 2：
     `softwareupdate --install-rosetta --agree-to-license`
3. 挂载、复制、去除隔离属性并卸载：

```bash
hdiutil attach ~/Downloads/dastyar-2.2.2-mac-arm64-unsigned.dmg
cp -R "/Volumes/Dastyar/Dastyar.app" /Applications/
xattr -dr com.apple.quarantine /Applications/Dastyar.app
hdiutil detach "/Volumes/Dastyar"
open /Applications/Dastyar.app
```

若 Gatekeeper 仍阻止启动，打开 **系统设置 → 隐私与安全性**，在“安全性”处选择 **仍要打开**。

若不执行 quarantine 命令，可右键应用选择 **打开**，再点 **打开**。

Dastyar 与 AionUi 使用不同 bundle ID，可同时运行。
