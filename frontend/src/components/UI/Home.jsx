import React, { useEffect, useState } from 'react';
import MetaData from '../../assets/MetaData';
import '../../styles/UIStyle/Home.scss';
import '../../styles/UIStyle/Footer.scss';
import SocialMediaLink from './SocialMediaLink';
import Skills from './Skills';
import CodingProfile from './CodingProfile';
import { useAlert } from 'react-alert';
import axios from 'axios';
import Loader from './Loader';

const Home = ({ resumeData }) => {
  const alert = useAlert();
  const [homeData, setHomeData] = useState({
    title: '',
    image: {
      public_id: '',
      url: ''
    }
  });
  const [loading, setLoading] = useState(false);
  async function getHome() {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/home`);
      const { title, image } = data.home[0];
      setHomeData({
        title: title,
        image: {
          public_id: image.public_id,
          url: image.url
        }
      });
      setLoading(false);
    } catch (err) {
      alert.error(err.message);
    }
  }
  useEffect(() => {
    getHome();
  }, []);

  const tags = homeData.title.split('.');

  return (
    <>
      <MetaData title={'Yash Gupta - Software Engineer'} />
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <section className="home">
              <aside className="home-aside1">
                <p className="home-intro">Hi, I'm Yash</p>
                <article>
                  <p className="home-tags">{tags[0]}.</p>
                  <p className="home-tags">{tags[1]}.</p>
                </article>
                <a href={resumeData} target="blank" className="home-resume">
                  Check my Resume
                </a>
                <p className="footer-social">
                  <SocialMediaLink />
                </p>
              </aside>
              <aside className="home-aside2">
                <span className="home-pic-container">
                  <img
                    src={homeData.image.url}
                    alt="Photo"
                    className="home-pic"
                  />
                </span>
              </aside>
            </section>
            <Skills />
            <CodingProfile />
          </>
        )}
      </>
    </>
  );
};

export default Home;
