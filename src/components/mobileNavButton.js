import '../styles/global.css'

export default function MobileNavButton() {
    function toggleMobileMenu() {
        var mobileNavBars = document.getElementsByClassName("mobile-nav-bar");
        for (let i = 0; i < mobileNavBars.length; i++) {
            mobileNavBars[i].classList.toggle("to-close");
        }
    
        document.getElementById("header").classList.toggle("mobile-vis");
    }

    return (
        <button type="button" id="mobile-nav-btn" aria-label="toggle-mobile-menu" onClick={toggleMobileMenu}>
            <span className="mobile-nav-bar" id="bar-1"></span>
            <span className="mobile-nav-bar" id="bar-2"></span>
            <span className="mobile-nav-bar" id="bar-3"></span>
        </button>
    );
}