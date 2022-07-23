import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { firebaseAuth } from '../firebase-config';
import Group from '../assets/Group.png';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      window.localStorage.setItem('tasker', JSON.stringify(name));
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) navigate('/');
    });
  }, [navigate]);
  return (
    <Section>
      <div className="container">
        <div className="group">
          <img className="image" src={Group} alt="group" />
        </div>
        <div className="log">
          <div className="login-n-signup">
            <div>
              <Link className="child1" to="/login">
                Log In
              </Link>
            </div>
            <div>Sign up</div>
          </div>
          <div className="form">
            <div className="line"></div>

            <input
              className="input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="button">
              <button onClick={handleSignIn}>Sign Up</button>
              <span>
                Already have an account?
                <Link to="/login">Log In</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  /* height: 100vh; */
  /* width: 100vw; */
  display: flex;
  /* flex-direction: row; */
  position: relative;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
  }
  .group {
    width: 40vw;
    max-width: 500px;
    .image {
      width: 100%;
      width: auto;
      max-width: 477px;
      max-height: 420px;
    }
  }
  .line {
    width: 314px;
    border: 2px solid rgba(64, 145, 223, 0.12);
    margin-bottom: 40px;
  }

  .log {
    border: 2px solid rgba(26, 59, 88, 0.24);
    border-radius: 65px;
    width: 40vw;
    height: 60vh;
    /* display: flex; */

    max-width: 644px;
    max-width: 570px;
    padding-top: 5rem;
    padding-bottom: 8rem;
    padding-left: 8rem;
    padding-right: 8rem;
    color: #1a3b58;
  }
  .login-n-signup {
    position: relative;
    left: -4rem;
    font-size: 26px;
    display: flex;
    align-items: flex-start;
    gap: 1.2rem;
    left: -2rem;
    margin-bottom: 45px;
  }

  .child1 {
    text-decoration: none;
    color: rgba(26, 59, 88, 0.33);
    cursor: pointer;
  }
  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .container {
    height: 100vh;
    display: flex;
    max-width: 1024px;
    position: relative;
    border-radius: 1rem;
    color: white;
    text-align: center;
    justify-content: flex-start;
    align-items: center;
    gap: 172px;
    input {
      width: 314px;
      height: 45px;
      font-weight: 300;
      border: 1px solid #cbdbea;
      font-size: 1.2rem;
      padding: 1rem;
      margin-bottom: 34px;
      border-radius: 0.5rem;
      color: #b7c0c9;
      &:focus {
        color: #b7c0c9;
        outline: 1px solid;
        outline-color: #ffffff;
        -moz-outline-radius: 0.5rem;
      }
    }
    .button {
      width: 314px;
      height: 45px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      a {
        color: #039be5;
        text-decoration: none;
      }
      button {
        background-color: #329c89;
        border: none;
        color: white;
        font-size: 1rem;
        font-weight: 600;
        padding: 0.5rem 2rem;
        border-radius: 0.5rem;
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        /* text-transform: uppercase; */
        &:hover {
          background-color: #3d9e8c;
          color: #ffffff;
        }
      }
    }
    .input {
      color: #b7c0c9;
      padding-top: 16px;
      padding-bottom: 18px;
      padding-left: 19px;
    }
  }
`;
export default Signup;
