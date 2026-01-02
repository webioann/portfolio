import React, { useState, useEffect } from 'react';
import Container from './Container.js';
import Navigation from './Navigation.js';
import LangSwitch from './LangSwitch.js';
import Summary from './Summary.js';
import Projects from './Projects.js';
import PetProject from './PetProject.js';
import ReactNativePetProject from './ReactNativePetProject.js';
import Contacts from './Contacts.js';
import Footer from './Footer.js';
import Portfolio from './Portfolio.js';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { crypto_data } from '../data/crypto_data.js';
import { netflix_data } from '../data/netflix_data.js';
import { dashboard_data } from '../data/dashboard_data.js';
import { portfolio_data } from '../data/portfolio_data.js';
import { messenger_data } from '../data/messenger_data.js';
import crypto_img from '../assets/crypto-screen.png';
import dashboard_img from '../assets/users-screen.png';
import netflix_img from '../assets/netflix-screen.png';

function App() {
    // === logic for adaptive navbar and burger menu ===
    const [move, setMove] = useState('0px');
    const windowWidth = useWindowWidth();

    useEffect(() => {
        windowWidth > 575 ? setMove('0px') : setMove('-770px');
    }, [windowWidth]);

    const move_navbar = () => {
        move === '-770px' ? setMove('0px') : setMove('-770px');
    };

    return (
        <Container>
            <Navigation move={move} move_navbar={move_navbar}>
                <LangSwitch />
            </Navigation>
            <Summary />
            <Projects>
                <PetProject
                    header="#1 Next JS full stack Netflix clone"
                    data={netflix_data}
                    img={netflix_img}
                />
                <PetProject
                    header="#2 Cryptocurrencies tracker"
                    data={crypto_data}
                    img={crypto_img}
                />
                <ReactNativePetProject
                    header="#3 Mobile messenger app"
                    data={messenger_data}
                />
                <PetProject
                    header="#4 Random users dashboard"
                    data={dashboard_data}
                    img={dashboard_img}
                />
                <Portfolio 
                    header="#5 My webdeveloper portfolio website" 
                    data={portfolio_data} 
                />
            </Projects>
            <Contacts />
            <Footer />
        </Container>
    )
}

export default App;
