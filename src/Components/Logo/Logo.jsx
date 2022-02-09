import React from 'react';
import './Logo.css';
import logo from '../../Images/logo.png';

export default function Logo() {
    return (
        <div className="container-logo">
            <img className="logo" src={logo}></img>
        </div>
    );
}
