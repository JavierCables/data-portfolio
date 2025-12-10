// Detect language or load last from localStorage
let currentLang = localStorage.getItem("lang") || "en";

// Apply language on page load
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);

  const btn = document.getElementById("langToggle");
  btn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";
    localStorage.setItem("lang", currentLang);
    applyLanguage(currentLang);
  });
});

function applyLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = translations[lang][key] || key;
  });
}
