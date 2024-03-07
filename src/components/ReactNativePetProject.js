import React from 'react';
import useTranslator from '../hooks/useTranslator';
import LinkToGithub from './LinkToGithub';
import LinkToProjectSite from './LinkToProjectSite';
import BadgeMaker from './BadgeMaker';
import wellcome from '../assets/messenger_wellcome.png';
import chat from '../assets/messenger_chat.png';
import draw_menu from '../assets/messenger_draw_menu.png';
import profile from '../assets/messenger_profile.png';
import login from '../assets/messenger_login.png';
import signup from '../assets/messenger_signup.png';
import settings from '../assets/messenger_settings.png';
import '../CSS/pet-project.scss';

const ReactNativePetProject = ({ header, data }) => {
    return (
        <section className="pet-project">
            <header className="g-subtitle">
                <h2>{header}</h2>
            </header>
            <div className="grids">
                <div className="grid-left">
                    <div className="discription">
                        <p>{useTranslator(data.discription)}</p>
                    </div>
                    <div className="project-links">
                        {/* <LinkToProjectSite link={data.site_link} /> */}
                        <LinkToGithub link={data.github_link} />
                    </div>
                    <div className="tools">
                        <BadgeMaker data={data.tools} animation={false} />
                    </div>
                </div>
                <div className="collage">
                    <img src={wellcome} alt="pet project image" />
                    <img src={chat} alt="pet project image" />
                    <img src={profile} alt="pet project image" />
                    <img src={draw_menu} alt="pet project image" />
                    <img src={login} alt="pet project image" />
                    <img src={signup} alt="pet project image" />
                    <img src={settings} alt="pet project image" />
                </div>
            </div>
        </section>
    );
};

export default ReactNativePetProject;
