import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import axios from 'axios';
import {
  About,
  Error,
  Footer,
  Header,
  Home,
  Projects,
  Login,
  EnterData
} from './components';

const App = () => {
  const alert = useAlert();
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [resumeData, setResumeData] = useState('');

  async function getResume() {
    try {
      const { data } = await axios.get(`/api/v1/resume`);
      const temp = data.resume[0].link;
      setResumeData(temp);
    } catch (err) {
      alert.error(err.message);
    }
  }
  useEffect(() => {
    getResume();
  }, []);

  return (
    <Router>
      <Header resumeData={resumeData} />;
      <Routes>
        <Route path="/" element={<Home resumeData={resumeData} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login_account"
          element={<Login setIsAuthUser={setIsAuthUser} />}
        />
        <Route
          path="/loggedin"
          element={
            <EnterData isAuthUser={isAuthUser} setIsAuthUser={setIsAuthUser} />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
