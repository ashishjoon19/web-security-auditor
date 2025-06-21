function runSecurityScan() {
  const issues = [];

  // HTTPS check
  if (location.protocol !== "https:") {
    issues.push("❌ Site is not using HTTPS.");
  }
  
  // Form over HTTP check
  document.querySelectorAll("form").forEach(form => {
    if (form.querySelector('input[type="password"]') && location.protocol !== "https:") {
      issues.push("❌ Login form served over insecure HTTP.");
    }
  });

  // Script version check
  document.querySelectorAll("script[src]").forEach(script => {
    const src = script.src;
    if (src.includes("jquery") && src.match(/1\.[0-9]+\.[0-9]+/)) {
      issues.push("⚠️ Possibly outdated jQuery version: " + src);
    }
  });

  // Header check (async)
  fetch(location.href)
    .then(response => {
      const headers = [...response.headers.entries()];
      const headerMap = Object.fromEntries(headers);

      if (!headerMap['content-security-policy']) {
        issues.push("⚠️ Missing Content-Security-Policy header.");
      }
      if (!headerMap['strict-transport-security']) {
        issues.push("⚠️ Missing Strict-Transport-Security header.");
      }
      if (!headerMap['x-frame-options']) {
        issues.push("⚠️ Missing X-Frame-Options header.");
      }

      // Grade calculation
      let grade;
      if (issues.length <= 1) grade = "🟢 Grade: A (Secure)";
      else if (issues.length <= 3) grade = "🟡 Grade: B";
      else if (issues.length <= 5) grade = "🟠 Grade: C";
      else grade = "🔴 Grade: D (Needs Attention)";
      issues.unshift(grade);

      // Store for popup
      chrome.storage.local.set({ securityIssues: issues });
    })
    .catch(() => {
      chrome.storage.local.set({ securityIssues: ["⚠️ Error fetching headers."] });
    });
}

runSecurityScan();
