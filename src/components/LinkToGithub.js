import React from 'react'
import { VscGithub } from 'react-icons/vsc'
import useTranslator from '../hooks/useTranslator'
import { linkText } from '../data/links_url'
import '../CSS/links.scss'

function LinkToGithub({ link }) {

    return (
        <a href={ link } target="blank" className='link-box'>
            <VscGithub className='icon'/>
            <span className='link-text'>{useTranslator(linkText.github)}</span>
        </a>
    )
}

export default LinkToGithub;
