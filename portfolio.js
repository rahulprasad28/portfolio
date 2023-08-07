const body = document.querySelector("body");
const themeToggle = document.querySelector("#theme-toggle");

const toggleTheme = () => {
    body.classList.toggle("dark")
    body.classList.contains("dark") ? themeToggle.innerHTML = `<span class="material-symbols-outlined">
    light_mode
    </span>` : themeToggle.innerHTML = `<span class="material-symbols-outlined">
    dark_mode
    </span>`
}

themeToggle.addEventListener("click", toggleTheme)