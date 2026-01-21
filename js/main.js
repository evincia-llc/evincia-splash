(() => {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const mailto = (subject, body) => {
    const s = encodeURIComponent(subject);
    const b = encodeURIComponent(body);
    window.location.href = `mailto:jerry@evincia.co?subject=${s}&body=${b}`;
  };

  // LMRR intro CTA
  const ctaRisk = document.getElementById("ctaRisk");
  if (ctaRisk) {
    ctaRisk.addEventListener("click", () => {
      mailto(
        "LMRR Intro Request",
        [
          "Hi Jerry,",
          "",
          "I'd like a short intro call about the Legacy Modernization Risk Report (LMRR).",
          "",
          "Company: ",
          "Role: ",
          "System type (e.g., .NET Framework / ASP.NET / WCF): ",
          "What you’re planning (upgrade / migrate / refactor / rewrite): ",
          "Preferred times:",
          "",
          "Thanks!"
        ].join("\n")
      );
    });
  }

  // Advisory CTA
  const ctaAdvisory = document.getElementById("ctaAdvisory");
  if (ctaAdvisory) {
    ctaAdvisory.addEventListener("click", () => {
      mailto(
        "Advisory Services Inquiry",
        [
          "Hi Jerry,",
          "",
          "I'd like to ask about fixed-scope advisory services related to modernization planning.",
          "",
          "Company: ",
          "Role: ",
          "Current challenge: ",
          "Preferred times: ",
          "",
          "Thanks!"
        ].join("\n")
      );
    });
  }
})();
