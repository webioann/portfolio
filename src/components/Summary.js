import React from 'react';
import { skills_data } from '../data/skills_data';
import useTranslator from '../hooks/useTranslator';
import { about, skills } from '../data/text_for_summary';
import BadgeMaker from './BadgeMaker';
import '../CSS/summary.scss';

function Summary() {

    return (
        <section className="summary">
            <h1 className='g-deep-title'>Summary</h1>
            <div className="wrapper">
                <div className="about-box">
                    <h2 className="g-subtitle">{useTranslator(about.subtitle)}</h2>
                    <ul className="about">
                        <li className='about'>  {useTranslator(about.about_me)}</li>
                        <li className='soft-skills'>  {useTranslator(about.soft_skills)}</li>
                        <li className='in_work'>  {useTranslator(about.in_work)}</li>
                    </ul>
                </div>
                <div className="skills-box">
                    <h2 className="g-subtitle">{useTranslator(skills.subtitle)}</h2>
                    <BadgeMaker data={skills_data} animation={true}/>
                </div>
            </div>
        </section>
    )
}

export default Summary;
