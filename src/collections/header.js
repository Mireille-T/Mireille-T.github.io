import { Link } from "react-router-dom";

import '../styles/global.css';
import MobileNavButton from '../components/mobileNavButton';

import resumeFile from "../media/Resume_MireilleTan.pdf";

const pages = [
  { id: 0, title: 'Home', link: "/" },
  { id: 1, title: 'About', link: '/about' },
  { id: 2, title: 'Projects', link: '/projects' }
];

export default function Header({ currentPageIdx }) {
  const headerItems = pages.map(page =>
    <Link key={page.id} to={page.link} className={currentPageIdx === page.id ? "current-page" : ""}>
      {page.title}
    </Link>
  );

  return (
    <>
      <MobileNavButton />
      <header id="header">
        {headerItems}
        <a href={resumeFile} target="_blank" rel="noreferrer">Résumé</a>
      </header>
    </>
  );
}