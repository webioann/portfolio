import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaPlus } from 'react-icons/fa';
import '../CSS/burger.scss';

function Burger({ move_navbar, move }) {
    if (move === '-770px') {
        return (
            <div className="burger-box">
                <GiHamburgerMenu
                    className="burger-icon"
                    onClick={() => move_navbar()}
                />
            </div>
        );
    } else {
        return (
            <div className="burger-box">
                <FaPlus
                    className="burger-icon rotate"
                    onClick={() => move_navbar()}
                />
            </div>
        );
    }
}
export default Burger;
