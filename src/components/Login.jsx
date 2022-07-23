import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { firebaseAuth } from '../firebase-config';
import Group from '../assets/Group.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
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
            <div>Log In</div>
            <div className="login-n-signup-child2">
              <Link className="child2" to="/signup">
                Sign up
              </Link>
            </div>
          </div>
          <div className="form">
            <div className="line"></div>
            <div className="instruction">
              <div className="instruction1">To Continue</div>
              <div className="instruction2">We need your name & Email</div>
            </div>
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div className="button">
              <button onClick={handleLogin}>Log In</button>

              <span>
                Not a member ? <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  /* height: 100vh; */
  /* width: 100vw; */
  display: flex;
  position: relative;
  /* flex-direction: row; */
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
  .instruction {
    position: relative;
    left: -4rem;
  }
  .instruction1 {
    position: relative;
    font-size: 21px;
    font-weight: 500;
    color: #1a3b58;
    left: -2rem;
    margin-bottom: 0.3rem;
  }
  .instruction2 {
    position: relative;
    left: -1rem;

    font-size: 0.7rem;
    font-weight: 300;
    color: #999999;
    /* left: 0px; */
    margin-bottom: 2rem;
  }
  .log {
    border: 2px solid rgba(26, 59, 88, 0.24);
    border-radius: 65px;
    width: 40vw;
    height: 60vh;
    /* display: flex; */

    max-height: 644px;
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
    font-weight: 500;
    display: flex;
    align-items: flex-start;
    gap: 1.2rem;
    left: -2rem;
    margin-bottom: 45px;
  }
  .login-n-signup-child2 {
    text-decoration: none;
    color: rgba(26, 59, 88, 0.33);
    cursor: pointer;
  }
  .child2 {
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
