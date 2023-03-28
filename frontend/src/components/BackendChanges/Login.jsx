import React, { useState } from 'react';
import MetaData from '../../assets/MetaData';
import '../../styles/BackendChangesStyle/Login.scss';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthUser }) => {
  const alert = useAlert();
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [password, setpassword] = useState('');

  async function loginSystem(user, password) {
    try {
      const config = { headers: { 'Content-Type': 'application/json' } };
      await axios.post(`/api/v1/login`, { user, password }, config);
      setIsAuthUser(true);
      navigate('/loggedin');
      alert.success('Succesfully Logged in');
    } catch (err) {
      alert.error(err.response.data.message);
    }
  }

  function formSubmit(e) {
    e.preventDefault();
    loginSystem(userName, password);
  }

  return (
    <>
      <MetaData title={'Login'} />
      <section className="login">
        <p className="login-head">Login</p>
        <form className="login-form" onSubmit={formSubmit}>
          <input
            type="text"
            placeholder="UserName"
            className="login-input"
            onChange={e => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            onChange={e => setpassword(e.target.value)}
          />
          <button className="login-submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Login;
