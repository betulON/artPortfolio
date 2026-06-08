const themeToggle = document.querySelector("[data-theme-toggle]");
const root = document.documentElement;

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme !== "light") {
  root.classList.add("dark-theme");
  if (themeToggle) themeToggle.textContent = "White";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    root.classList.toggle("dark-theme");
    const isDark = root.classList.contains("dark-theme");
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "White" : "Black";
  });
}
