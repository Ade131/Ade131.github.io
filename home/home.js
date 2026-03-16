const toggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.body.classList.toggle("light", theme === "light");
  toggle.textContent = theme === "light" ? "🌙" : "☀️";
}

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

toggle.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});