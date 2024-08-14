import { useEffect } from 'react';

import BackgroundAnimation from '../components/backgroundAnimation';
import Header from './header';
import { SetDarkMode, SetPauseAnimation, MiscButtons } from './miscButtons';
import Footer from './footer';

export default function PageLayout({ title, currentPageIdx, pageContent, lastModifiedDate, blurBackground }) {
    useEffect(() => {
        SetDarkMode(window.sessionStorage.getItem("data-theme"));
        SetPauseAnimation(window.sessionStorage.getItem("pause"));
    });

    document.title = "Mireille Tan | " + title;
    window.scrollTo({ top: 0, behavior: 'instant' });

    return (
        <div>
            <BackgroundAnimation />
            <Header currentPageIdx={currentPageIdx} />
            {pageContent}
            <MiscButtons includeAnimation={true} />
            <Footer lastModifiedDate={lastModifiedDate} blurBackground={blurBackground} />
        </div>
    );
}