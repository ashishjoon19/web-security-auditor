function runSecurityScan() {
  const issues = [];

  if (location.protocol !== "https:") {
    issues.push("Site is not using HTTPS.");
  }

  fetch(location.href).then(response => {
    const headers = [...response.headers.entries()];
    const headerMap = Object.fromEntries(headers);

    if (!headerMap['content-security-policy']) {
      issues.push("Missing Content-Security-Policy header.");
    }
    if (!headerMap['strict-transport-security']) {
      issues.push("Missing Strict-Transport-Security header.");
    }
    
    chrome.runtime.sendMessage({ type: "SECURITY_SCAN_RESULT", issues });
  });
}

runSecurityScan();
