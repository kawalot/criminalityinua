import React from 'react';
import { Link } from 'gatsby';

import { useSiteMetadata } from '../hooks';

import '../styles/Header.scss'

import logo from '../images/logo-long-light.png';

const Header = () => {
  const { companyName } = useSiteMetadata();

  return (
    <header className="header">
      <img src={logo} alt={companyName}></img>
      <nav className="header-nav">  
        <Link to="/" className="header-nav__link" activeClassName="active">Map</Link>
        <Link to="/about/" className="header-nav__link" activeClassName="active">About</Link> <br />
      </nav>
    </header>
  );
};

export default Header;
