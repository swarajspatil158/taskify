import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Home from '../Home';
import { User } from '../components/User';
import './styles.scss';
import '../index.scss';

export default function TaskBoard() {
  return (
    <div>
      <Navbar />
      <div className="align-components">
        <User className="sidebar" />
        <Home className="board" />
      </div>
    </div>
  );
}
