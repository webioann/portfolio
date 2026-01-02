import { useState, useEffect } from 'react';

export function useWindowWidth() {
    const [windowWidth, setWindoWidth] = useState(0);

    window.addEventListener('resize', () => {
        let width = window.innerWidth;
        setWindoWidth(width);
    });

    useEffect(() => {
        let width = window.innerWidth;
        setWindoWidth(width);
    }, []);

    return windowWidth;
}
