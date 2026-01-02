import React from 'react';
import useTranslator from '../hooks/useTranslator';
import LinkToGithub from './LinkToGithub';
import BadgeMaker from './BadgeMaker';
import '../CSS/pet-project.scss';

const Portfolio = ({ header, data }) => {

    return (
        <section className="pet-project">
            <header className="g-subtitle">
                <h2>{header}</h2>
            </header>
            <div className="discription">
                <p>{useTranslator(data.discription)}</p>
            </div>
            <div className="port-github-link">
                <LinkToGithub link={data.github_link} />
            </div>
            <div className="tools">
                <BadgeMaker data={data.tools} animation={false} />
            </div>
        </section>
    )
}

export default Portfolio;
