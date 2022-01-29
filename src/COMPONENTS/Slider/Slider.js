import React,{ useState,useEffect,useRef } from 'react';
import { useSelector } from "react-redux";

// ======== image imports ==============================
import desktopDark from '../../assets/desktop-dk-eng.png';
import desktopLight from '../../assets/desktop-lt-rus.png';
import tabletDark from '../../assets/tablet-dk-eng.png';
import tabletLight from '../../assets/tablet-lt-rus.png';
import mobileDark from '../../assets/mobile-dk-eng.png';
import mobileLight from '../../assets/mobile-lt-eng.png';
import './slider.scss';

function Slider() {

    const theme = useSelector(state => state.redux.theme) 
    const [desktopImg,setDesktopImg] = useState(desktopDark)
    const [tabletImg,setTabletImg] = useState(tabletDark)
    const [mobileImg,setMobileImg] = useState(mobileDark)
    const [bgClass,setBgClass] = useState('green')

    useEffect(() => {
        theme === 'light' ? setDesktopImg(desktopDark) : setDesktopImg(desktopLight)
        theme === 'light' ? setTabletImg(tabletDark) : setTabletImg(tabletLight)
        theme === 'light' ? setMobileImg(mobileDark) : setMobileImg(mobileLight)
    },[theme])

    const style_1 = {
        transform: 'translateX(0px)',
        visibility: 'visible'
    }
    const style_2 = {
        transform: 'translateX(100%)',
        visibility: 'visible'
    }

    return (
        <div className='slider'>
            <picture className='slide-1' 
                style={style_1}>
                <source srcSet={tabletImg} media="(min-width: 500px) and (max-width: 767.999px)"  type='image/png'/>
                <source  srcSet={desktopImg} media="(min-width: 768px)" type='image/png'/>
                <img src={mobileImg} alt='img'/>
            </picture>
            <picture className='slide-2' 
                style={style_2}>
                <source srcSet={tabletImg} media="(min-width: 500px) and (max-width: 767.999px)"  type='image/png'/>
                <source  srcSet={desktopImg} media="(min-width: 768px)" type='image/png'/>
                <img src={mobileImg} alt='img'/>
            </picture>
            <div className='modal-tooltip'>
                <p >
                    masage 
                </p>
            </div>
        </div>
    );
}
export default Slider;
