import React from 'react';
import './FieldContact.css';

export default function FieldContact({ icon, headerField, field, isLink, onClickHendler }) {
    return (
        <div className="field-contact">
            <div className='field-contact-right'>
                <div className="container-icon">
                    <img className="icon-field" src={icon}></img>
                </div>
                <span className="header-field">{headerField}</span>
            </div>
            <span className={`field ${isLink && field ? 'link' : ''}`} onClick={onClickHendler}><span>{field || 'אין במאגר'}</span></span>
        </div>
    );
}
