import React from 'react';
import logo from '../../img/logo.svg'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                    <img src={logo} alt=""width={'250px'} />
                    <div className="header-nav">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'popular'}>Popular</NavLink>
                    <NavLink to={'toprated'}>Top-Rated</NavLink>
                    </div>
                    <div className="search">
                    <input type="text" />
                    <button>search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;