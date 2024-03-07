import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import useTranslator from '../hooks/useTranslator';
import '../CSS/links.scss';

function LinkToGithub({ link }) {
    const link_text = {
        eng: 'see my code',
        ukr: 'мій код тут',
    };

    return (
        <a href={link} target="blank" className="link-box">
            <VscGithub className="icon" />
            <span className="link-text">{useTranslator(link_text)}</span>
        </a>
    );
}

export default LinkToGithub;
