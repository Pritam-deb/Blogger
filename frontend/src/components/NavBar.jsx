import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/navbar.css"

const NavBar = () => {
    const user = true;
    return (
        <div className="nav">
        <div className="navLeft">
          <i className="navIcon fab fa-facebook-square"></i>
          <i className="navIcon fab fa-instagram-square"></i>
          <i className="navIcon fab fa-pinterest-square"></i>
          <i className="navIcon fab fa-twitter-square"></i>
        </div>
        <div className="navCenter">
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="navListItem">ABOUT</li>
            <li className="navListItem">CONTACT</li>
            <li className="navListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            {user && <li className="navListItem">LOGOUT</li>}
          </ul>
        </div>
        <div className="navRight">
          {user ? (
            <Link className="link" to="/settings">
              <img
                className="navImg"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
            </Link>
          ) : (
            <ul className="navList">
              <li className="navListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="navListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          <i className="navSearchIcon fas fa-search"></i>
        </div>
      </div>
    )
};

export default NavBar;
