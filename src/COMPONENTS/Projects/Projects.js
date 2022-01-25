import React from 'react';
import useTranslator from '../../hooks/useTranslator';
import { projTitle,portfolio,dashboard,weather } from '../../data/multiLang';
import { gitHubPortfolio,gitHubDashboard,gitHubWeather } from '../../data/constants';
import LinkBox from '../LinkBox/LinkBox'
import './projects.scss';

function Projects() {

    return (
        <section className="projects">
            <h2 className="title">{ useTranslator(projTitle) }</h2>

            <h3 className="subtitle">#1 { useTranslator(dashboard.subtitle) } </h3>
            <section className="dashboard">
                <div className="wrapper">
                    
                                            
                    <p className='discription'>
                        <span>{ useTranslator(dashboard.spanDiscript) }</span>
                        { useTranslator(dashboard.textDicript) }
                    </p>
                        
                    <p className='used-tools'>
                        <span>{ useTranslator(dashboard.spanTools) }</span>
                        { useTranslator(dashboard.textTools) }
                    </p>

                    <div className='link-row'>
                        <LinkBox href={'#'} type='site'/>
                        <LinkBox href={gitHubDashboard} type='github'/>
                    </div>
                </div>

                <div className='screenshot'>

                </div>

            </section>

            <h3 className="subtitle">#2 { useTranslator(portfolio.subtitle) }</h3>
            <section className="portfolio">
                <div className="wrapper">
                    

                    <p className='discription'>
                        <span>{ useTranslator(dashboard.spanDiscript) }</span>
                        { useTranslator(portfolio.textDicript) }
                    </p>
                    
                    <p className='used-tools'>
                        <span>{ useTranslator(dashboard.spanTools) }</span>
                        { useTranslator(portfolio.textTools) }
                    </p>

                    <LinkBox href={gitHubPortfolio} type='github'/>
                </div>

            </section>

            <h3 className="subtitle">#3 { useTranslator(weather.subtitle) } </h3>
            <section className="weather">
                <div className="wrapper">
                    
                        
                    <p className='discription'>
                        <span>{ useTranslator(weather.spanDiscript) }</span>
                        { useTranslator(weather.textDicript) }
                    </p>
                        
                    <p className='used-tools'>
                        <span>{ useTranslator(weather.spanTools) }</span>
                        { useTranslator(weather.textTools) }
                    </p>

                    <div className='link-row'>
                        <LinkBox href={'#'} type='site'/>
                        <LinkBox href={gitHubWeather} type='github'/>
                    </div>

                </div>

                <div className='screenshot'>

                </div>
            </section>

        </section>
    )
}

export default Projects;
