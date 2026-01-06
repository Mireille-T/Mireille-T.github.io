import '../styles/global.css';

export default function BackgroundAnimation() {
    return (
      <div className="area">
        <ul className="floating-shapes" id="bg-ani">
          <li className={window.isPaused ? "ani-pause" : ""}></li>
          <li className={window.isPaused ? "ani-pause" : ""}></li>
          <li className={window.isPaused ? "ani-pause" : ""}></li>
          <li className={window.isPaused ? "ani-pause" : ""}></li>
          <li className={window.isPaused ? "ani-pause" : ""}></li>
          <li className={window.isPaused ? "ani-pause" : ""}></li>
          <li className={window.isPaused ? "ani-pause" : ""}></li>
          <li className={window.isPaused ? "ani-pause" : ""}></li>
          <li className={window.isPaused ? "ani-pause" : ""}></li>
          <li className={window.isPaused ? "ani-pause" : ""}></li>
        </ul>
      </div>
    );
  }
  