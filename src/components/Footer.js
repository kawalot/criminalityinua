import React from 'react';
import { useSiteMetadata } from '../hooks';
import '../styles/Footer.scss'


const Footer = () => {
  const { authorName } = useSiteMetadata();

  return (
    <footer id="pageFooter" className="footer">
      2020, {authorName}
    </footer>
  );
};

export default Footer;