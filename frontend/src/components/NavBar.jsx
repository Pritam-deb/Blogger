import React from 'react';
import "./styles/navbar.css"

const NavBar = () => {
    return <div className='nav'>
        <div className='navLeft'>
            <i className='navIcon fab fa-facebook-square'></i>
            <i className='navIcon fab fa-twitter-square'></i>
            <i className='navIcon fab fa-instagram-square'></i>
            <i className='navIcon fab fa-pinterest-square'></i>
        </div>
        <div className='navCenter'>
            <ul className='navList'>
                <li className='navListItem'>Home</li>
                <li className='navListItem'>Write</li>
                <li className='navListItem'>About</li>
                <li className='navListItem'>Contact</li>
                <li className='navListItem'>Logout</li>
            </ul>
        </div>
        <div className='navRight'>
            <img className='navImage' src='https://drive.google.com/file/d/1O0RRssqunJUopbWZ8OGPkEui9O1jCDY9/view?usp=sharing' alt='profile picture'></img>
            <i className='navSearchIcon fas fa-search'></i>
        </div>

  </div>;
};

export default NavBar;
