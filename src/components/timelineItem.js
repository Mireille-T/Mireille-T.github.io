import styles from '../styles/about.module.css'

export default function TimelineItem({ id, title, period, imgUrl, listItems }) {
    const listContent = listItems.map(listItem =>
        <li key={listItem.id}>{listItem.text}</li>
    );

    return (
        <div className={`${styles["timeline-container"]} ${styles[(id % 2 === 0 ? "timeline-left" : "timeline-right")]}`}>
            <div className={styles["timeline-content"]}>
                <h2>{title}</h2>
                <p className={styles["timeline-content-subtitle"]}>{period}</p>
                <ul>{listContent}</ul>
            </div>
            <div className={styles["timeline-img"]} style={{backgroundImage: `url(${imgUrl})`}}>
            </div>
        </div>
    );
}