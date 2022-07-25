import React,{ useState,useEffect } from 'react';
import '../CSS/tooltip.scss';

function Tooltip({ text }) {

    const [visibility,setVisibility] = useState(false)
    const [show,setShow] = useState({
        opacity: 0,
        zIndex: 10
    })

    useEffect(() => {
        visibility ? ( setShow({opacity: 1,zIndex: 100000})) : ( setShow({opacity: 0,zIndex: 10}))
    },[visibility])

    return (
        <div className='tooltip' 
            onMouseEnter={() => setVisibility(true)}
            onMouseLeave={() => setVisibility(false)}
            style={{ opacity: show.opacity, zIndex: show.zIndex }}>
            <p className='tooltip-text'>
                { text }
            </p>
        </div>
    )
}

export default Tooltip;
