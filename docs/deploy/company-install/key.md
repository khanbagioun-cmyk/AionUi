# Model key setup

The company route is preset; the key is not in the installer.

1. Open **Settings → Models**.
2. Add the **Zharfa Company** platform.
3. The endpoint `https://api.zharfa.tech/v1` and model `glm5_3-fp8` are
   prefilled.
4. Paste the company key into **API Key** and save.
5. Start a conversation and send one real prompt.

The key is stored in the local Dastyar profile only. If the same key is supplied
through the environment, the variable is `ZHARFA_COMPANY_LLM_API_KEY`.

One entry per install is enough. AionUi's key entries are separate.
