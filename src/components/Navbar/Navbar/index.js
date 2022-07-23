import React from 'react';
import './styles.scss';

export default function Navbar() {
  const name = JSON.parse(window.localStorage.getItem('tasker'));

  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <h1 className="name">{`Hi ${name}`}</h1>
          </div>
        </div>
      </nav>
    </div>
  );
}
