chrome.storage.local.get("securityIssues", (data) => {
  const issues = data.securityIssues || [];
  const resultDiv = document.getElementById("results");

  if (issues.length === 0) {
    resultDiv.innerHTML = "<p>✅ No issues found.</p>";
  } else {
    resultDiv.innerHTML = issues.map(issue => `<p>${issue}</p>`).join("");
  }
});
