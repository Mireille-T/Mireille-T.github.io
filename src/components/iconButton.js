import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import '../styles/global.css';

export default function IconButton({ btnClass, btnId, ariaLabel, onClick, iconClass, altIconClass, iconId }) {
    const [useAlt, setUseAlt] = useState(false);

    function handleClick(){
        if (onClick !== undefined){
            onClick();
            setUseAlt(!useAlt);
        }
    }

    return (
        <button type="button" className={btnClass} id={btnId} aria-label={ariaLabel} onClick={handleClick}>
            <FontAwesomeIcon id={iconId} icon={(useAlt && altIconClass) ? altIconClass : iconClass} />
        </button>
    );
}

library.add(fab, fas, far);