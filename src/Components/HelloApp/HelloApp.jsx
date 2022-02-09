import React from 'react';
import logo from '../../Images/logo.png';
import './HelloApp.css';

export default function HelloApp() {
  return (
    <div className="container-Hello-app">
      <img className="Hello-app" src={logo}></img>
      <div className="txt-Hello-app">אלפון - ערלוי</div>
    </div>
  );
}
