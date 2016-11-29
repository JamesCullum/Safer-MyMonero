# Safer MyMonero
> This git is actively managed. Feel free to create pull requests.

This is an authorised open-source offline copy of MyMonero.com, a web wallet for the cryptocurrency Monero. Using this addon will heavily increase the security of using the wallet, comparingly to running a wallet on your computer in a sandbox.

This is a chrome extension which can be either installed from the source code (download ZIP from Github, unpack, enable "Developer Mode", "Load unpacked extension" and point to folder) or using the [Chrome Store entry](https://chrome.google.com/webstore/detail/hcgliilmeggjhmpkfglnekbegacockei/). To verify the source code of the store you can download the code using chrome-extension-downloader.com and compare it to GitHub. Make sure to disable auto-updates as well to prevent future compromises, [click here](http://stackoverflow.com/a/27657703/1424378) to find out how.

#### Additional Features
- Protects your wallet from secret javascript modifications & malicious browser extensions
- Safeguard against HTML injections from the wallet backend
- Cancels any unencrypted connections and automatically redirects you to the extension when opening MyMonero.com
- Removed tracking from Google Analytics & partly Cloudflare
- Mixin following MRL0004 recommendation (default 4, lowest 2)
- Strict Content-Security Policy & URL Whitelist
- Minor changes including error fixes and design improvements

Donations for the development of the extension are welcome at donate@monero-merchants.com