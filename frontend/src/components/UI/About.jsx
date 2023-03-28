import React, { useEffect, useState } from 'react';
import '../../styles/UIStyle/About.scss';
import MetaData from '../../assets/MetaData';
import axios from 'axios';
import { useAlert } from 'react-alert';
import Loader from './Loader';

const About = () => {
  const alert = useAlert();
  const [aboutData, setAboutData] = useState({
    intro: '',
    work: '',
    college: '',
    achieve: ''
  });
  const [loading, setLoading] = useState(false);

  async function getAbout() {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/about`);
      const { intro, work, college, achieve } = data.about[0];
      setAboutData({
        intro,
        work,
        college,
        achieve
      });
      setLoading(false);
    } catch (err) {
      alert.error(err.message);
    }
  }

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <>
      <MetaData title={'About - Yash Gupta'} />
      <section className="about">
        {loading ? (
          <Loader />
        ) : (
          <>
            {aboutData.intro ? (
              <Card ele={aboutData.intro} heading={'About Me'} />
            ) : (
              <span></span>
            )}
            {aboutData.work ? (
              <Card ele={aboutData.work} heading={'Experience'} />
            ) : (
              <span></span>
            )}
            {aboutData.achieve ? (
              <Card ele={aboutData.achieve} heading={'Achievements'} />
            ) : (
              <span></span>
            )}
            {aboutData.college ? (
              <Card ele={aboutData.college} heading={'College'} />
            ) : (
              <span></span>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default About;

const Card = ({ ele, heading }) => {
  return (
    <>
      <aside className="about-me">
        <p className="about-head">{heading}</p>
        <p className="about-data">{ele}</p>
      </aside>
    </>
  );
};
