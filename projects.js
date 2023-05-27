const codeFilter = ["html", "css", "typescript", "azure", "unity", "c#", "github"];
const designFilter = ["inkscape", "figma"];
const modelFilter = ["blender3d", "fusion360"];
const aniTime = 250;
isPaused = false;

window.addEventListener('load', (event) => {
    /* Saved infromation */
    if (sessionStorage.getItem("data-theme") == "dark") toggleDarkMode();
    if (sessionStorage.getItem("pause") == "true") togglePause();

    /* Interactions */
    menuNavButton = document.getElementById("mobile-nav-btn");
    menuNavButton.addEventListener("click", toggleMobileMenu);

    toTopButton = document.getElementById("to-top-btn");
    toTopButton.addEventListener("click", scrollToTop);

    darkModeToggle = document.getElementById("dark-mode-btn");
    darkModeToggle.addEventListener("click", toggleDarkMode);

    pauseToggle = document.getElementById("pause-btn");
    pauseToggle.addEventListener("click", togglePause);

    filterBtns = document.getElementById("filter").getElementsByTagName("button");
    for (let i = 0; i < filterBtns.length; i++) {
        filterBtns[i].addEventListener("click", filterProjects);
    }

    assignFlipDir();
    assignProjectLinks();
});

function toggleMobileMenu() {
    mobileNavBars = document.getElementsByClassName("mobile-nav-bar");
    for (let i = 0; i < mobileNavBars.length; i++) {
        mobileNavBars[i].classList.toggle("to-close");
    }

    document.getElementById("header").classList.toggle("mobile-vis");
}

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

function togglePause() {
    isPaused = !isPaused;

    // Pause bg animation
    const bgAniList = document.getElementById('bg-ani');
    const bgAniEle = bgAniList.getElementsByTagName('li');
    for (let i = 0; i < bgAniEle.length; i++) {
        bgAniEle[i].classList.toggle("ani-pause");
    }

    document.getElementById("pause-icon").classList.toggle("fa-pause");
    document.getElementById("pause-icon").classList.toggle("fa-play");
    document.getElementById("pause-play-text").innerHTML = isPaused ? "Play" : "Pause";
    sessionStorage.setItem("pause", isPaused.toString());
}

function assignFlipDir() {
    let projectCards = document.getElementsByClassName("card-title-container");
    for (let i = 0; i < projectCards.length; i++) {
        if (i % 2 == 0) projectCards[i].classList.toggle("flipx");
        else projectCards[i].classList.toggle("flipy");
    }
}

function assignProjectLinks() {
    let projectCards = document.getElementsByClassName("project-card");
    for (let i = 0; i < projectCards.length; i++) {
        projectCards[i].href = "projects/" + projectCards[i].id.toString().substring(8) + ".html";
    }
}

function filterProjects(evt) {
    document.getElementsByClassName("current-filter")[0].classList.toggle("current-filter");
    evt.target.classList.toggle("current-filter");
    let currentFilter = evt.target.innerHTML;
    let projectCards = document.getElementsByClassName("project-card");
    if (currentFilter == "All") {
        for (let i = 0; i < projectCards.length; i++) {
            projectCards[i].style.display = "block";
        }
    } else if (currentFilter == "Code") {
        for (let i = 0; i < projectCards.length; i++) {
            projectCards[i].style.display = (Array.from(projectCards[i].classList).filter(x => codeFilter.indexOf(x) !== -1).length > 0) ? "block" : "none";
        }
    } else if (currentFilter == "Graphics") {
        for (let i = 0; i < projectCards.length; i++) {
            projectCards[i].style.display = (Array.from(projectCards[i].classList).filter(x => designFilter.indexOf(x) !== -1).length > 0) ? "block" : "none";
        }
    } else if (currentFilter == "3D Models") {
        for (let i = 0; i < projectCards.length; i++) {
            projectCards[i].style.display = (Array.from(projectCards[i].classList).filter(x => modelFilter.indexOf(x) !== -1).length > 0) ? "block" : "none";
        }
    }
}