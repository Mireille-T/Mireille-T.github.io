import '../styles/global.css';
import '../fontawesome-free-6.6.0-web/css/all.min.css';
import IconButton from '../components/iconButton';

export function SetDarkMode(dataTheme) {
  document.documentElement.setAttribute("data-theme", dataTheme);
  window.sessionStorage.setItem("data-theme", dataTheme);
}

export function SetPauseAnimation(toPause) {
  window.isPaused = (toPause === "true");
  const bgAniList = document.getElementById('bg-ani');
  const bgAniEle = bgAniList.getElementsByTagName('li');
  for (let i = 0; i < bgAniEle.length; i++) {
    if (toPause === "true") {
      bgAniEle[i].classList.add("ani-pause");
    } else if (bgAniEle[i].classList.contains("ani-pause")) {
      bgAniEle[i].classList.remove("ani-pause");
    }
  }

  window.sessionStorage.setItem("pause", toPause);
}

export function MiscButtons({ includeAnimation = false }) {
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function toggleDarkMode() {
    if (document.documentElement.getAttribute("data-theme") !== "dark") {
      SetDarkMode("dark");
    } else {
      SetDarkMode("light");
    }
  }

  function togglePauseAnimation() {
    window.isPaused = !window.isPaused;
    SetPauseAnimation(window.isPaused.toString());
  }  

  return (
    <div id="misc-buttons">
      <IconButton
        btnClass={"pri-btn"}
        btnId={"to-top-btn"}
        ariaLabel={"scroll-to-top"}
        iconClass={"fa-solid fa-arrow-up"}
        onClick={scrollToTop} />
      <IconButton
        btnClass={"sec-btn"}
        btnId={"dark-mode-btn"}
        ariaLabel={"toggle-light-and-dark-mode"}
        iconClass={(window.sessionStorage.getItem("data-theme") === "light") ? "fa-solid fa-moon" : "fa-solid fa-sun"}
        altIconClass={(window.sessionStorage.getItem("data-theme") === "light") ? "fa-solid fa-sun" : "fa-solid fa-moon"}
        iconId={"dark-mode-icon"}
        onClick={toggleDarkMode} />
      {includeAnimation ? <IconButton
        btnClass={"sec-btn"}
        btnId={"pause-btn"}
        ariaLabel={"toggle-pause-animation"}
        iconClass={(window.sessionStorage.getItem("pause") === "false") ? "fa-solid fa-pause" : "fa-solid fa-play"}
        altIconClass={(window.sessionStorage.getItem("pause") === "false") ? "fa-solid fa-play" : "fa-solid fa-pause"}
        iconId={"pause-icon"}
        onClick={togglePauseAnimation} /> : <></>}
    </div>
  );
}