import React from 'react'
import crypto_img from '../assets/crypto-screen.png'
import useTranslator from '../hooks/useTranslator'
import { cryptocurrency } from '../data/text_for_cryptocurrency'
import { crypto_githublink,cryptocurrency_link } from '../data/links_url'
import { tools_crypto } from '../data/tools_crypto'
import LinkToGithub from './LinkToGithub'
import LinkToProjectSite from './LinkToProjectSite'
import BadgeMaker from './BadgeMaker'
import '../CSS/pet-project.scss'

const CryptoCurrency = () => {
    return (
        <section className="pet-project">
            <header className="g-subtitle">
                <h2>#1 Cryptocurrency</h2>
            </header>
            <div className='grids'>
                <div className='grid-left'>
                    <div className='discription'>
                        {/* <span className='header'>{useTranslator(cryptocurrency.discr_span)}</span> */}
                        <p>{useTranslator(cryptocurrency.discr_text)}</p>
                    </div>
                    <div className='project-links'>
                        <LinkToProjectSite link={ cryptocurrency_link }/>
                        <LinkToGithub link={ crypto_githublink }/>
                    </div>
                    <div className='tools'>
                        <BadgeMaker data={tools_crypto} animation={false}/>
                    </div>
                </div>
                <div className='image'>
                    <img src={crypto_img} alt='pet project cryptocurrency'/>
                </div>
            </div>
        </section> 
    )
}

export default CryptoCurrency

