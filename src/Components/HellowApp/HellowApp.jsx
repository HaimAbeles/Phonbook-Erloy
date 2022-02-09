import React from 'react';
import logo from '../../Images/logo.png';
import './HellowApp.css';

export default function HellowApp() {
  return (
    <div className="container-hellow-app">
      <img className="hellow-app" src={logo}></img>
    </div>
  );
}
