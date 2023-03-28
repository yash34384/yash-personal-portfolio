import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import MetaData from '../../assets/MetaData';
import '../../styles/UIStyle/Projects.scss';
import axios from 'axios';
import Loader from './Loader';

const Projects = () => {
  const alert = useAlert();

  const [type, setType] = useState('all');
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getProjects(type) {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/project`);
      const temp = data.project;
      if (type === 'all') {
        setProjectData([...temp]);
      } else {
        const currentData = temp.filter(ele => ele.category === type);
        setProjectData([...currentData]);
      }
      setLoading(false);
    } catch (err) {
      alert.error(err.message);
    }
  }

  useEffect(() => {
    getProjects(type);
  }, [type]);

  function curr(e) {
    e.preventDefault();
    setType(e.target.value);
  }

  return (
    <>
      <MetaData title={'Projects - Yash Gupta'} />
      <section className="pro">
        <aside className="pro-heading">Projects</aside>
        <aside className="pro-Cate">
          <button className="pro-CateBtn" value="all" onClick={curr}>
            All Projects
          </button>
          <button className="pro-CateBtn" value="frontend" onClick={curr}>
            Frontend Projects
          </button>
          <button className="pro-CateBtn" value="fullstack" onClick={curr}>
            FullStack Projects
          </button>
        </aside>
        {loading === false ? (
          <aside className="pro-main">
            {projectData.length > 0 ? (
              <>
                {projectData.map(ele => (
                  <ProjectCard ele={ele} key={ele.name} />
                ))}
              </>
            ) : (
              <Empty type={type} />
            )}
          </aside>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
};

export default Projects;

const ProjectCard = ({ ele }) => {
  const { tech } = ele;
  const techUsed = tech.split(',');

  return (
    <section className="pro-box">
      <img src={ele.image.url} alt={ele.name} className="pro-img" />
      <aside className="pro-box-content">
        <p className="pro-btns">
          <a href={ele.link} target="blank" className="pro-btn">
            Live Demo
          </a>
          <a href={ele.code} target="blank" className="pro-btn">
            Github
          </a>
        </p>
        <p className="pro-name">{ele.name}</p>
        <p className="pro-tech">
          Technology Used ={' '}
          {techUsed.map(i => (
            <span key={i} className="pro-techName">
              {i} /{' '}
            </span>
          ))}
        </p>
        <p className="pro-category">
          Category = <span className="pro-categoryName">{ele.category}</span>
        </p>
      </aside>
    </section>
  );
};

const Empty = ({ type }) => {
  return (
    <section className="pro-box">
      <aside className="pro-box-content">
        <p className="pro-name">Working on {type} Project...</p>
      </aside>
    </section>
  );
};
