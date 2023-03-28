import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import '../../styles/UIStyle/Skills.scss';
import axios from 'axios';

const Skills = () => {
  const alert = useAlert();
  const [skillData, setSkillData] = useState([]);

  async function getSkills() {
    try {
      const { data } = await axios.get(`/api/v1/home/skills`);
      const temp = data.skills;
      setSkillData([...temp]);
    } catch (err) {
      alert.error(err.message);
    }
  }
  useEffect(() => {
    getSkills();
  }, []);

  return (
    <section className="skills">
      <aside className="skill-block">
        <p className="skill-heading">Skills</p>
        <aside className="skill-box">
          <Card skillData={skillData} />
        </aside>
      </aside>
    </section>
  );
};

export default Skills;

const Card = ({ skillData }) => {
  return (
    <>
      {skillData.map(ele => (
        <abbr key={ele.name} title={ele.name} className="skill-abbr">
          <img src={ele.image.url} alt={ele.name} className="skill-img" />
        </abbr>
      ))}
    </>
  );
};

const Nothing = () => {
  return <></>;
};
