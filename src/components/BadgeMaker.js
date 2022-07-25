import React from 'react'
import '../CSS/badge-maker.scss'

const BadgeMaker = ({ data, animation }) => {

    if (animation) {
        return (
            <ul className='skills'>
                { data.map((item) => ( 
                    <li key={item.id}
                        className='skill on-start'
                        style={{ animationDelay: item.delay }}>
                        <p className='skill-text'>
                            { item.title } 
                        </p>
                    </li>
                ))}
            </ul>
        )
    }
    else {
        return (
            <ul className='badges'>
                { data.map((item) => ( 
                    <li key={item.id} className='tool'>
                        <p className='tool-text'>
                            { item.title } 
                        </p>
                    </li>
                ))}
            </ul>
        )
    }
}

export default BadgeMaker;