import React from 'react';
import { phone, linkedInLink, email, gitHubLink } from '../data/links_url';
import { FaViber,FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { VscGithub } from 'react-icons/vsc';
import '../CSS/contacts.scss';

function Contacts() {

    return (
        <section id='contacts' className="contacts">
            <h1 className="g-deep-title">Contacts</h1>
            <div className='contacts-field'>
                <div className='viber box'>
                    <FaViber className='icon not-link'/>
                    <p>{ phone }</p>
                </div>
                <a className='linkedin box' href={ linkedInLink } target="_blank">
                    <FaLinkedin className='icon'/>
                    <p>linkedin/alexander-ve...</p>
                </a>
                <div className='email box'>
                    <HiOutlineMail className='icon not-link'/>
                    <p>{ email }</p>
                </div>
                <a className='git-hub box' href={ gitHubLink } target="_blank">
                    <VscGithub className='icon'/>
                    <p>github.com/webioann</p>
                </a>
                </div>
            </section>
    )
}

export default Contacts;
