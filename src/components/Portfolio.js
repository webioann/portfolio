import React from 'react'
import useTranslator from '../hooks/useTranslator'
import { portfolio } from '../data/text_for_portfolio'
import { portfolio_githublink } from '../data/links_url'
import LinkToGithub from './LinkToGithub'
import { tools_portfolio } from '../data/tools_portfolio'
import BadgeMaker from './BadgeMaker'
import '../CSS/pet-project.scss'

const Portfolio = () => {
    return (
        <section className="pet-project">
            <header className="g-subtitle">
                <h2>#3 Portfolio</h2>
            </header>
            <div className='discription'>
                <p>{useTranslator(portfolio.discr_text)}</p>
            </div>
            <div className='port-github-link'>
                <LinkToGithub link={ portfolio_githublink }/>
            </div>
            <div className='tools'>
                <BadgeMaker data={tools_portfolio} animation={false}/>
            </div>
        </section> 
    )
}

export default Portfolio;
