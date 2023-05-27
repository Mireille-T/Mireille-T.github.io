const codeStart = ["std::cout &lt;&lt;", "Debug.Log(", "System.out.println(", "console.log(", "Serial.println("];
const codeEnd = ["&lt;&lt; std::endl;", ");", ");", ");", ");"];
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

    projectBtns = document.getElementsByClassName("btn-project");
    for (let i = 0; i < projectBtns.length; i++) {
        projectBtns[i].addEventListener("click", toggleProject);
    }

    codeSpanFirst = document.getElementById("code-start");
    codeSpanLast = document.getElementById("code-end");
    let i = 0;
    const cycleCode = () => {
        if (!isPaused) {
            codeSpanFirst.classList.toggle("fade");
            codeSpanLast.classList.toggle("fade");
            setTimeout(function () {
                codeSpanFirst.innerHTML = codeStart[i];
                codeSpanLast.innerHTML = codeEnd[i];
                codeSpanFirst.classList.toggle("fade");
                codeSpanLast.classList.toggle("fade");
            }, aniTime);
            i = ++i % codeStart.length;
        }
    };
    setInterval(cycleCode, 2500);
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

function toggleProject(evt) {
    let project = evt.target.id.toString();
    document.getElementsByClassName("current-project")[0].classList.toggle("current-project");
    document.getElementsByClassName("btn-current-project")[0].classList.toggle("btn-current-project");
    setTimeout(function () {
        document.getElementById(project).classList.toggle("btn-current-project");
        document.getElementById(project.substring(4))?.classList.toggle("current-project");
    }, aniTime);
}