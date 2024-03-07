import React from 'react';
import useTranslator from '../hooks/useTranslator';
import LinkToGithub from './LinkToGithub';
import LinkToProjectSite from './LinkToProjectSite';
import BadgeMaker from './BadgeMaker';
import '../CSS/pet-project.scss';

const PetProject = ({ header, data, img }) => {
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
                        <LinkToProjectSite link={data.site_link} />
                        <LinkToGithub link={data.github_link} />
                    </div>
                    <div className="tools">
                        <BadgeMaker data={data.tools} animation={false} />
                    </div>
                </div>
                <div className="image">
                    <img src={img} alt="pet project image" />
                </div>
            </div>
        </section>
    );
};

export default PetProject;
