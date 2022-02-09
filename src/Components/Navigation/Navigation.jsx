import React from 'react';
import './Navigation.css';
import rightArrow from '../../Images/right-arrow.png';
import leftArrow from '../../Images/left-arrow.png';

export default function Navigation({ id, length, setIndex }) {

    function updateCard(event) {
        if (!event.currentTarget.classList.contains('disabeld'))
            switch (event.currentTarget.name) {
                case "prev":
                    setIndex(prev => prev - 1);
                    break;
                case "next":
                    setIndex(prev => prev + 1);
                    break;
            }
    }

    return (
        <div className="container-navigation">
            <div className="base-navigation">
                <img className="arrow-img" src={rightArrow} onClick={updateCard} className={`btn-move ${id <= 0 ? 'disabeld' : ''}`} name="prev"></img>
                <div className="txt-result">{length >= 0 ? `תוצאה ${id + 1} מתוך ${length + 1}` : 'אין תוצאות'}</div>
                <img className="arrow-img" src={leftArrow} onClick={updateCard} className={`btn-move ${id >= length ? 'disabeld' : ''}`} name="next"></img>
            </div>
        </div>
    );
}
