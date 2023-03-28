import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import MetaData from '../../assets/MetaData';
import '../../styles/BackendChangesStyle/EnterData.scss';

const EnterData = ({ isAuthUser, setIsAuthUser }) => {
  const alert = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthUser === false) {
      navigate('/login_account');
      alert.error('Login First');
    }
  }, [isAuthUser]);

  async function logOut() {
    try {
      await axios.get('/api/v1/logout');
      setIsAuthUser(false);
      navigate('/login_account');
      alert.success('Log Out Successfully');
    } catch (error) {
      alert.error(error.message);
    }
  }

  return (
    <>
      <MetaData title={'DataArea'} />
      <section className="ed">
        <HomeData />
        <SkillData />
        <ProjectData />
        <AboutData />
        <ResumeData />
        <button className="log-out" onClick={() => logOut()}>
          Log Out
        </button>
      </section>
    </>
  );
};

export default EnterData;

const HomeData = () => {
  const alert = useAlert();
  const [title, setTitle] = useState('');
  const [dp, setDp] = useState('');

  async function registerHome(form) {
    try {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      await axios.post(`/api/v1/home`, form, config);
      alert.success('Home Done');
    } catch (err) {
      alert.error(err.message);
    }
  }

  function homeapi(e) {
    e.preventDefault();
    const form = new FormData();
    form.set('title', title);
    form.set('image', dp);
    registerHome(form);
  }

  function avatar(e) {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        setDp(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <aside className="ed-main">
      <p className="ed-head">Home</p>
      <form
        className="ed-form"
        encType="multipart/form-data"
        onSubmit={homeapi}
      >
        <label className="ed-label">Upload DP</label>
        <input
          type="file"
          accept="image/*"
          className="ed-input"
          onChange={avatar}
        />
        <label className="ed-label">Upload Title</label>
        <textarea
          className="ed-input"
          onChange={e => setTitle(e.target.value)}
        />
        <input type="submit" className="ed-input" />
      </form>
    </aside>
  );
};

const SkillData = () => {
  const alert = useAlert();

  const [skillName, setSkillName] = useState('');
  const [skillImg, setSkillImg] = useState('');

  async function registerSkill(form) {
    try {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      await axios.post(`/api/v1/home/skills`, form, config);
      alert.success('Skill Done');
    } catch (err) {
      alert.error(err.message);
    }
  }

  function skillapi(e) {
    e.preventDefault();
    const form = new FormData();
    form.set('image', skillImg);
    form.set('name', skillName);
    registerSkill(form);
  }

  function avatar(e) {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        setSkillImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <aside className="ed-main">
      <p className="ed-head">Skills</p>
      <form
        className="ed-form"
        encType="multipart/form-data"
        onSubmit={skillapi}
      >
        <label className="ed-label">Upload Image Of Skill</label>
        <input
          type="file"
          accept="image/*"
          className="ed-input"
          onChange={avatar}
        />
        <label className="ed-label">Name Of Skill</label>
        <input
          type="text"
          className="ed-input"
          onChange={e => setSkillName(e.target.value)}
        />
        <input type="submit" className="ed-input" />
      </form>
    </aside>
  );
};

const ProjectData = () => {
  const alert = useAlert();

  const [image, setImage] = useState('');
  const [project, setProject] = useState({
    name: '',
    link: '',
    tech: '',
    code: ''
  });
  const [category, setCategory] = useState();

  const { name, link, tech, code } = project;

  async function registerProject(form) {
    try {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      await axios.post(`/api/v1/project`, form, config);
      alert.success('Project Done');
    } catch (err) {
      alert.error(err.message);
    }
  }

  function projectapi(e) {
    e.preventDefault();
    const form = new FormData();
    form.set('name', name);
    form.set('image', image);
    form.set('link', link);
    form.set('tech', tech);
    form.set('code', code);
    form.set('category', category);
    registerProject(form);
  }

  function changeData(e) {
    if (e.target.name === 'image') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setProject({ ...project, [e.target.name]: e.target.value });
    }
  }

  return (
    <aside className="ed-main">
      <p className="ed-head">Projects</p>
      <form
        className="ed-form"
        encType="multipart/form-data"
        onSubmit={projectapi}
      >
        <label className="ed-label">Project Name</label>
        <input
          type="text"
          className="ed-input"
          name="name"
          onChange={changeData}
        />
        <label className="ed-label">Project Image</label>
        <input
          type="file"
          accept="image/*"
          className="ed-input"
          name="image"
          onChange={changeData}
        />
        <label className="ed-label">Live Demo Link</label>
        <input
          type="text"
          className="ed-input"
          name="link"
          onChange={changeData}
        />
        <label className="ed-label">Technology Used</label>
        <input
          type="text"
          className="ed-input"
          name="tech"
          onChange={changeData}
        />
        <label className="ed-label">Github Link</label>
        <input
          type="text"
          className="ed-input"
          name="code"
          onChange={changeData}
        />
        <label className="ed-label">Category</label>
        <input
          type="radio"
          name="category"
          className="ed-input"
          value="frontend"
          onChange={e => setCategory(e.target.value)}
        />
        <label className="ed-label">Frontend</label>
        <input
          type="radio"
          name="category"
          className="ed-input"
          value="fullstack"
          onChange={e => setCategory(e.target.value)}
        />
        <label className="ed-label">Fullstack</label>
        <input type="submit" className="ed-input" />
      </form>
    </aside>
  );
};

const AboutData = () => {
  const alert = useAlert();

  const [aboutData, setAboutData] = useState({
    intro: '',
    work: '',
    college: '',
    achieve: ''
  });

  const { intro, work, college, achieve } = aboutData;

  async function registerAbout(intro, work, college, achieve) {
    try {
      const config = { headers: { 'Content-Type': 'application/json' } };
      await axios.post(
        `/api/v1/about`,
        { intro, work, college, achieve },
        config
      );
      alert.success('About Done');
    } catch (err) {
      alert.error(err.message);
    }
  }

  function aboutApi(e) {
    e.preventDefault();
    registerAbout(intro, work, college, achieve);
  }

  function changeData(e) {
    e.preventDefault();
    setAboutData({ ...aboutData, [e.target.name]: e.target.value });
  }

  return (
    <aside className="ed-main">
      <p className="ed-head">About</p>
      <form className="ed-form" onSubmit={aboutApi}>
        <label className="ed-label">Introduction</label>
        <textarea className="ed-input" name="intro" onChange={changeData} />
        <label className="ed-label">Work</label>
        <textarea className="ed-input" name="work" onChange={changeData} />
        <label className="ed-label">college</label>
        <textarea className="ed-input" name="college" onChange={changeData} />
        <label className="ed-label">Achievements</label>
        <textarea className="ed-input" name="achieve" onChange={changeData} />
        <input type="submit" className="ed-input" />
      </form>
    </aside>
  );
};

const ResumeData = () => {
  const alert = useAlert();

  const [resume, setResume] = useState('');

  async function registerResume(form) {
    try {
      const config = { headers: { 'Content-Type': 'application/json' } };
      await axios.post(`/api/v1/resume`, form, config);
      alert.success('Resume Done');
    } catch (err) {
      alert.error(err.message);
    }
  }

  function resumeApi(e) {
    e.preventDefault();
    const form = new FormData();
    form.set('link', resume);
    registerResume(form);
  }

  return (
    <aside className="ed-main">
      <p className="ed-head">Resume</p>
      <form className="ed-form" onSubmit={resumeApi}>
        <label className="ed-label">Resume Link</label>
        <input
          type="text"
          className="ed-input"
          onChange={e => setResume(e.target.value)}
        />
        <input type="submit" className="ed-input" />
      </form>
    </aside>
  );
};
