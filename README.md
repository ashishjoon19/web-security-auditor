🔒 Web Security Auditor – Chrome Extension
Web Security Auditor is a lightweight Chrome extension that automatically scans websites for common security vulnerabilities and misconfigurations. It helps users and developers identify missing security headers, outdated libraries, insecure forms, and other risks — all in real time while browsing.

🚀 Features
✅ Detects if a website is using insecure HTTP

✅ Checks for missing security headers like:

Content-Security-Policy

Strict-Transport-Security

X-Frame-Options

✅ Flags login forms served over HTTP

✅ Identifies potentially outdated jQuery libraries (v1.x)

✅ Assigns a security grade (A–D) based on detected issues

✅ Displays a simple, readable report in a popup

✅ No setup required — works automatically on every site you visit

📸 How It Works
When you visit a website, the extension’s content script scans it for security issues.

Results are stored locally using chrome.storage.

When you click the extension icon, a popup shows a detailed report of the site’s security status.

🧠 Use Cases
Frontend developers checking their own web apps

Penetration testing or quick reconnaissance

Awareness tool for security-conscious users

🛠️ Tech Stack
JavaScript (Content scripts + DOM inspection)

Chrome Extension APIs

HTML + CSS for the popup UI

📦 Installation (Development Mode)
Clone this repo or download the ZIP

Go to chrome://extensions

Enable Developer Mode

Click "Load Unpacked"

Select the project folder

Visit any site and click the extension icon to view the repo
