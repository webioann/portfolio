import React from 'react'
import randomusers_img from '../assets/users-screen.png'
import useTranslator from '../hooks/useTranslator'
import { dashboard } from '../data/text_for_randomusers'
import { tools_users } from '../data/tools_users'
import { users_githublink,randomusers_link } from '../data/links_url'
import LinkToGithub from './LinkToGithub'
import LinkToProjectSite from './LinkToProjectSite'
import BadgeMaker from './BadgeMaker'
import '../CSS/pet-project.scss'

const CryptoCurrency = () => {
    return (
        <section className="pet-project">
            <header className="g-subtitle">
                <h2>#2 Random Users </h2>
            </header>
            <div className='grids'>
                <div className='grid-left'>
                    <div className='discription'>
                        <p>{useTranslator(dashboard.discr_text)}</p>
                    </div>
                    <div className='project-links'>
                        <LinkToProjectSite link={ randomusers_link }/>
                        <LinkToGithub link={ users_githublink }/>
                    </div>
                    <div className='tools'>
                        <BadgeMaker data={tools_users} animation={false}/>
                    </div>
                </div>
                <div className='image'>
                    <img src={randomusers_img} alt='pet project random users'/>
                </div>
            </div>
        </section> 
    )
}

export default CryptoCurrency;
