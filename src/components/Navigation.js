import React from 'react';
import useTranslator from '../hooks/useTranslator';
import { navbar } from '../data/text_for_navigation';
import Burger from './Burger.js';
import ResumeDropDown from './ResumeDropDown';
import '../CSS/navigation.scss';

const Navigation = ({ move, children, move_navbar }) => {
    
    return (
        <nav id='fixed-top'>
            <div className='fixed-wrapper'>
                <div className='navbar'
                    style={{transform: `translateX(${move})`}}>
                    <ul className='menu'>
                        <li className='link'>
                            <a href='#top' >
                                { useTranslator(navbar.home) }
                            </a>
                        </li>
                        <li className='link'>
                            <a href='#contacts' >
                                { useTranslator(navbar.contacts) }
                            </a>
                        </li>
                        <li className='link'>
                            <a href='#projects' >
                                { useTranslator(navbar.projects) }
                            </a>
                        </li>
                        <ResumeDropDown/>
                    </ul>
                    { children }
                </div>
                <Burger move_navbar={move_navbar} move={move}/>
            </div>
        </nav>
    )
}

export default Navigation;