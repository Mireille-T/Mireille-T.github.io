const aniTime = 250;

window.addEventListener('load', (event) => {
    /* Saved infromation */
    if (sessionStorage.getItem("data-theme") == "dark") toggleDarkMode();

    /* Interactions */
    toTopButton = document.getElementById("to-top-btn");
    toTopButton.addEventListener("click", scrollToTop);

    darkModeToggle = document.getElementById("dark-mode-btn");
    darkModeToggle.addEventListener("click", toggleDarkMode);
});

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleDarkMode() {
    if (document.documentElement.getAttribute("data-theme") != "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        sessionStorage.setItem("data-theme", "dark");
        document.getElementById("light-dark-text").innerHTML = "Light";
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        sessionStorage.setItem("data-theme", "light");
        document.getElementById("light-dark-text").innerHTML = "Dark";
    }
    document.getElementById("dark-mode-icon").classList.toggle("fa-moon");
    document.getElementById("dark-mode-icon").classList.toggle("fa-sun");
}