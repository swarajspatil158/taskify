import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../firebase-config';

export const User = () => {
  const [user, setUser] = useState(undefined);

  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) setUser(currentUser);
      else navigate('/login');
    });
  }, [navigate]);

  return (
    <Section>
      <div className="container">
        <button onClick={() => signOut(firebaseAuth)}>Log Out</button>
      </div>
    </Section>
  );
};

const Section = styled.section`
  height: 80vh;
  max-height: 850px;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: #FEFEFE;
border-right: 2px solid #F0F0F0;
  .container {
   
    background-color: #FEFEFE;
    color: #9A9A9A;
    text-align: center;
    
    
    button {
      padding: 0;
border: none;
background: none;
      background-color: #FEFEFE;
      color: 9A9A9A;
      border-radius: 20px;
      padding: .5rem 1rem;
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #F0F0F0;
        color: #2e3440;
      }
    }
  }
`;
