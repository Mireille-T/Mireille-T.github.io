import { useState, useEffect } from "react"
import styles from '../styles/home.module.css'

const codeStart = ["std::cout << ", "Debug.Log(", "System.out.println(", "console.log(", "Serial.println(", "print("];
const codeEnd = [" << std::endl;", ");", ");", ");", ");", ");"];
const aniTime = 250;

export default function CodeCycle() {
    const [fading, setFading] = useState(false);
    const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

    useEffect(() => {
        const timeout = setInterval(() => {
            if (!window.isPaused) {
                setFading(true);
                setTimeout(() => {
                    var nextCodeIndex = currentCodeIndex + 1;
                    if (nextCodeIndex >= codeStart.length) nextCodeIndex = 0;
                    setCurrentCodeIndex(nextCodeIndex);
                    setFading(false);
                }, aniTime);
            }
        }, 2500);
        return () => clearInterval(timeout);
    }, [currentCodeIndex]);

    return (
        <p id={styles["landing-greeting"]}><span className={`${styles["code-span"]}` + (fading ? ` ${styles["fade"]}` : "")}>{codeStart[currentCodeIndex]}</span> “Hello! I am”
            <span className={`${styles["code-span"]}` + (fading ? ` ${styles["fade"]}` : "")}>{codeEnd[currentCodeIndex]}</span>
        </p>
    );
}