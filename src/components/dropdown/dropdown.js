import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DropdownStyles from './dropdown.css'

const DropdownMenu = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
     
    }, []);
    
    return(
        <div ref={menuRef} className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <button className='dropdown-toggle' onClick={toggleMenu}>
                Menu
            </button>
            <ul className='dropdown-list'>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
            </ul>
        </div>
    
    );
};

export default DropdownMenu;