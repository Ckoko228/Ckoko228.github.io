// button.js

// Доступ к кнопке и body
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Проверяем, сохранена ли тема в localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === "light-theme" ? "Сменить на тёмную тему" : "Сменить на светлую тему";
}

// Обработчик клика
themeToggle.addEventListener("click", () => {
  const isLightTheme = body.classList.toggle("light-theme");

  // Обновляем текст кнопки
  themeToggle.textContent = isLightTheme ? "Сменить на тёмную тему" : "Сменить на светлую тему";

  // Сохраняем выбранную тему в localStorage
  localStorage.setItem("theme", isLightTheme ? "light-theme" : "dark-theme");
});
