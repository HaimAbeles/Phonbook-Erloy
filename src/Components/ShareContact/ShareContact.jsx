import React from 'react';
import './ShareContact.css';

export default function ShareContact({icon, onclickBtn}) {
  return (
    <img className="icon-share-contact" src={icon} onClick={onclickBtn} ></img>
  )
}
