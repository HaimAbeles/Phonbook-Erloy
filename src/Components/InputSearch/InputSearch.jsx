import React from 'react';
import './InputSearch.css';

export default function InputSearch({ placeholder, name, value, onChangeInput }) {
    return (
        <>
            <input className="search-field" type="text" placeholder={placeholder} name={name} value={value} onChange={onChangeInput} />
        </>
    );
}
