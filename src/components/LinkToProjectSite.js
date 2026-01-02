import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import useTranslator from '../hooks/useTranslator';
import '../CSS/links.scss';

function LinkToProjectSite({ link }) {
    const link_text = {
        eng: 'visit site',
        ukr: 'відвідати сайт',
    };

    return (
        <a href={link} target="blank" className="link-box">
            <CgWebsite className="icon" />
            <span className="link-text">{useTranslator(link_text)}</span>
        </a>
    );
}

export default LinkToProjectSite;
