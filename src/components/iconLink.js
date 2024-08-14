export default function IconLink({ link, ariaLabel, iconClass }) {
    return (
        <a href={link} target="_blank" rel="noreferrer" aria-label={ariaLabel}><i
            className={iconClass}></i></a>
    );

}