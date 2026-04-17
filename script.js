/* =========================
   DARK MODE TOGGLE (CLEAN)
========================= */

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.innerText = "☀ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.innerText = "🌙 Dark Mode";
  }
});