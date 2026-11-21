# 校验下载文件

在安装包与 `SHA256SUMS` 所在目录执行以下命令。

## macOS

```bash
shasum -a 256 -c SHA256SUMS --ignore-missing
```

通过的行以 `OK` 结尾。若显示 `FAILED`，删除安装包并重新下载。

## Windows PowerShell

```powershell
$expected = (Select-String -Path .\SHA256SUMS -Pattern 'dastyar-.*win-x64').Line.Split()[0]
$actual = (Get-FileHash .\dastyar-2.2.2-win-x64-unsigned.exe -Algorithm SHA256).Hash.ToLower()
if ($actual -ne $expected) { throw "校验和不一致" }
"OK $actual"
```

确认 `SHA256SUMS` 中的文件名与下载的安装包一致。校验不通过时不要运行安装包。
