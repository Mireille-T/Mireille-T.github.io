import styles from '../styles/home.module.css'
import IconLink from '../components/iconLink';

export default function ProjectPanel({ image, imageAlt, title, subtitle, contributions, links, currentProject }) {
    const contributionsItems = contributions.map(contribution =>
        <li key={contribution.id}>
            {contribution.description}
        </li>
    );

    const linksItems = links.map(link =>
        <IconLink key={link.id} link={link.link} ariaLabel={link.ariaLabel} iconClass={link.iconClass}/>
    );

    return (
        <div className={`${styles["project-panel"]}` + (currentProject ? ` ${styles["current-project"]}` : ` ${styles["hidden"]}`)}>
            <img src={image} alt={imageAlt}></img>
            <div>
                <h2>{title}</h2>
                <p className={styles["project-subtitle"]}>{subtitle}</p>
                <hr></hr>
                <p>Contributions:</p>
                <ul>{contributionsItems}</ul>
                <div className={styles["project-links"]}>{linksItems}</div>
            </div>
        </div>
    );
}