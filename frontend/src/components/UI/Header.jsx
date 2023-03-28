import React, { useEffect, useState } from 'react';
import '../../styles/UIStyle/Header.scss';
import { Link } from 'react-router-dom';

const Header = ({ resumeData }) => {
  // to hide and shown mobile option box
  function hide() {
    document.querySelector('.bar-icon').classList.toggle('fa-xmark');
    document.querySelector('.bar-icon').classList.toggle('fa-bars');
    document.querySelector('.options-sec-mobile').classList.toggle('hideBox');
  }

  // to change border and height on scroll of navbar
  const [border, changeBorder] = useState(false);
  function addBorder() {
    if (window.scrollY > 20) {
      changeBorder(true);
    } else {
      changeBorder(false);
    }
  }
  window.addEventListener('scroll', addBorder);

  return (
    <>
      <nav className={border ? 'nav borderBox' : 'nav'}>
        {/* side logo section  */}
        <section className="logo-sec">
          <Link to={'/'}>yash</Link>
        </section>
        {/* options which will shown on web  */}
        <section className="options-sec-web">
          <NavOptions resumeData={resumeData} />
        </section>
        <i class="fa-solid fa-bars bar-icon" onClick={() => hide()}></i>
      </nav>
      {/* options which will shown on mobile  */}
      <section className="options-sec-mobile hideBox">
        <NavOptions resumeData={resumeData} />
      </section>
    </>
  );
};

const NavOptions = ({ resumeData }) => {
  return (
    <>
      <a href={resumeData} target="blank" className="btn btn-background-slide">
        Resume
      </a>
      <Link to={'/projects'} className="btn btn-background-slide">
        Projects
      </Link>
      <Link to={'/about'} className="btn btn-background-slide">
        About
      </Link>
      {/* <i class="fa-regular fa-moon"></i> */}
    </>
  );
};

export default Header;
