// DARK MODE TOGGLE
const toggleBtn = document.getElementById("darkModeToggle");
const root = document.documentElement;

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    root.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "☀️";
  }
});

// Toggle theme
toggleBtn.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  if (isDark) {
    root.removeAttribute("data-theme");
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
});
