const themeStorageKey = "mackanTheme";
const darkTheme = "dark";
const lightTheme = "light";

function getStoredTheme() {
    return localStorage.getItem(themeStorageKey);
}

function getPreferredTheme() {
    const storedTheme = getStoredTheme();

    if (storedTheme === darkTheme || storedTheme === lightTheme) {
        return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? darkTheme : lightTheme;
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
}

function updateThemeToggle(button, theme) {
    const isDark = theme === darkTheme;

    button.textContent = isDark ? "Light mode" : "Dark mode";
    button.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
    button.setAttribute("aria-pressed", String(isDark));
}

function createThemeToggle() {
    const button = document.createElement("button");
    const currentTheme = document.documentElement.dataset.theme || getPreferredTheme();

    button.type = "button";
    button.className = "theme-toggle";
    updateThemeToggle(button, currentTheme);

    button.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === darkTheme ? lightTheme : darkTheme;

        localStorage.setItem(themeStorageKey, nextTheme);
        applyTheme(nextTheme);
        updateThemeToggle(button, nextTheme);
    });

    document.body.appendChild(button);
}

applyTheme(getPreferredTheme());

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createThemeToggle);
} else {
    createThemeToggle();
}
