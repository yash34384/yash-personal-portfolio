import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/UIStyle/Footer.scss';
import SocialMediaLink from './SocialMediaLink';

const Footer = () => {
  return (
    <>
      <footer className="foot">
        <article className="logo-sec footer-logo">
          <Link to={'/'}>yash</Link>
        </article>
        <article className="footer-tag">
          Software Engineer - Ghaziabad, Uttar Pradesh
        </article>
        <article className="footer-social">
          <SocialMediaLink />
          {/* copywrite  */}
          <span className="copywrite">© Yash Gupta - All right Reserved.</span>
        </article>
      </footer>
      <a href="#">
        <i class="fa-solid fa-circle-up up-arrow"></i>
      </a>
    </>
  );
};

export default Footer;
