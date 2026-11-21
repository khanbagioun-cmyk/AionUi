# 虚拟机说明

交付前先在一次性虚拟机中测试安装包。

- macOS arm64：Apple Silicon 虚拟机，macOS 14 或更高。
- macOS x64：Intel 虚拟机，或在 Apple Silicon 上使用 Rosetta 2。
- Windows x64：使用默认 SmartScreen 策略的 Windows 11 虚拟机。

系统装好后创建快照。在虚拟机内校验安装包，然后测试安装、一条真实模型提示、重启和卸载。下一轮测试前恢复快照。

网络：模型线路需要访问 `https://api.zharfa.tech`。若代理拦截 TLS，必须信任其证书，否则应用无法连接。应用本身完成本地提示不需要其他网络访问。
