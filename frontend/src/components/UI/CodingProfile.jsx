import React from 'react';
import '../../styles/UIStyle/CodingProfile.scss';
import leetcode from '../../assets/leetcode.png';
import gfg from '../../assets/gfg.png';

const profile = [
  {
    name: 'LeetCode',
    image: leetcode,
    pLink: 'https://leetcode.com/Yash_Gupta_88/'
  },
  {
    name: 'GeeksForGeeks',
    image: gfg,
    pLink: 'https://auth.geeksforgeeks.org/user/yash_gupta_88/practice/'
  }
];

const CodingProfile = () => {
  return (
    <section className="cp">
      <aside className="cp-block">
        <p className="cp-heading">Coding Profile</p>
        <aside className="cp-box">
          {profile.map(ele => (
            <div key={ele.name} className="cp-profile">
              <img src={ele.image} alt={ele.name} className="cp-img" />
              <p className="cp-name">{ele.name}</p>
              <a href={ele.pLink} target="blank" className="cp-btn">
                Go to Profile
              </a>
            </div>
          ))}
        </aside>
      </aside>
    </section>
  );
};

export default CodingProfile;
