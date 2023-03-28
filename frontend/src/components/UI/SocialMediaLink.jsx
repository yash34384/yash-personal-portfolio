import React from 'react';
import '../../styles/UIStyle/Footer.scss';

const SocialMediaLink = () => {
  return (
    <span className="social-account">
      {/* insta  */}
      <a
        href="https://instagram.com/the_programming_room?igshid=ZDdkNTZiNTM="
        target="blank"
        className="socialLink"
      >
        <i class="fa-brands fa-square-instagram social-icon"></i>
      </a>

      {/* twitter  */}
      <a
        href="https://twitter.com/yash_gupta_84?t=NS4ZLWfe5SDll0vMncReAw&s=08"
        target="blank"
        className="socialLink"
      >
        <i class="fa-brands fa-square-twitter social-icon"></i>
      </a>

      {/* linked in  */}
      <a
        href="https://www.linkedin.com/in/yash-gupta-417206193"
        target="blank"
        className="socialLink"
      >
        <i class="fa-brands fa-linkedin social-icon"></i>
      </a>

      {/* gmail  */}
      <a href="mailto:yash.gupta.8642@gmail.com" className="socialLink">
        <i class="fa-solid fa-envelope social-icon"></i>
      </a>

      {/* github  */}
      <a href="https://github.com/yash34384" className="socialLink">
        <i class="fa-brands fa-square-github social-icon"></i>
      </a>
    </span>
  );
};

export default SocialMediaLink;
