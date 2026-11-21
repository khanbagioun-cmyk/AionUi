# macOS install

Dastyar uses `/Applications/Dastyar.app` and only its own profile, so AionUi can
stay installed.

1. Verify `SHA256SUMS` first.
2. Pick the installer for the Mac:
   - Apple Silicon: `dastyar-2.2.2-mac-arm64-unsigned.dmg`
   - Intel: `dastyar-2.2.2-mac-x64-unsigned.dmg`
   - On Apple Silicon, an x64 build needs Rosetta 2 once:
     `softwareupdate --install-rosetta --agree-to-license`
3. Mount, copy, clear quarantine and detach:

```bash
hdiutil attach ~/Downloads/dastyar-2.2.2-mac-arm64-unsigned.dmg
VOLUME=$(hdiutil info | awk -F'\t' '/\/Volumes\/Dastyar/{print $NF; exit}')
cp -R "$VOLUME/Dastyar.app" /Applications/
xattr -dr com.apple.quarantine /Applications/Dastyar.app
hdiutil detach "$VOLUME"
open /Applications/Dastyar.app
```

If Gatekeeper still blocks the launch, open **System Settings → Privacy &
Security**, scroll to Security and choose **Open Anyway**.

Without the quarantine command, right-click the app and choose **Open**, then
**Open** again.

Dastyar and AionUi have different bundle IDs and can run at the same time.
