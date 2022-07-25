import React from 'react'
import { CgWebsite } from 'react-icons/cg'
import useTranslator from '../hooks/useTranslator'
import { linkText } from '../data/links_url'
import '../CSS/links.scss'

function LinkToProjectSite({ link }) {

    return (
        <a href={ link }
            target="blank"
            className='link-box'>
            <CgWebsite className='icon'/>
            <span className='link-text'>{useTranslator(linkText.site)}</span>
        </a>
    )
}

export default LinkToProjectSite;
