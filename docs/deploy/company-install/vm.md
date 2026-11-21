# Virtual machine notes

Test installers in a disposable VM before handing them to users.

- macOS arm64: Apple Silicon VM, macOS 14 or newer.
- macOS x64: Intel VM or Rosetta 2 on Apple Silicon.
- Windows x64: Windows 11 VM with the normal SmartScreen policy.

Take a snapshot after the OS is installed. Verify the checksum inside the VM,
then test install, one real model prompt, relaunch and uninstall. Revert the
snapshot for the next run.

Networking: the model route needs `https://api.zharfa.tech`. A proxy that
intercepts TLS must trust its own certificate or the app cannot reach the route.
The app itself needs no other network access for a local prompt.
