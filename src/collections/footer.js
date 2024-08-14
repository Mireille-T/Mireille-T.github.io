import '../styles/global.css';

export default function Footer({ lastModifiedDate, blurBackground }) {
    return (
        <footer className={blurBackground ? "blur-background" : ""}>
            Developed with 💚 by Mireille Tan
            <br></br>
            Last update: {lastModifiedDate}
        </footer>
    );
};