import React from 'react';
import { useEffect } from 'react';
import {Linking} from 'react-native';

export default function SinglePersonContact({ SelectedPhonbookData, setIndex, id, length }) {
    console.log(length)
    useEffect(() => {
        console.log(SelectedPhonbookData);
    }, [SelectedPhonbookData]);

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

    function openCall(event) {debugger
        Linking.openURL(`tel:${event.currentTarget.innerText.replaceAll('-', '')}`)
    }

    return (
        <>
            <div>{length >= 0 ? id + 1 : 0}/{length + 1}</div>
            <div className="container-details">
                <div className="container-single-details">
                    <div>שם מלא</div>
                    <div>{SelectedPhonbookData.firstTitle} {SelectedPhonbookData.firstName} {SelectedPhonbookData.lastName} {SelectedPhonbookData.lastTitle}</div>
                </div>
                <div className="container-single-details">
                    <div>רחוב</div>
                    <div>{SelectedPhonbookData.address || 'אין במאגר'}</div>
                </div>
                <div className="container-single-details">
                    <div>עיר</div>
                    <div>{SelectedPhonbookData.city || 'אין במאגר'}</div>
                </div>
                <div className="container-single-details">
                    <div>טלפון בית</div>
                    <div onClick={openCall}>{SelectedPhonbookData.homePhone || 'אין במאגר'}</div>
                </div>                
                <div className="container-single-details">
                    <div>נייד</div>
                    <div onClick={openCall}>{SelectedPhonbookData.mobile || 'אין במאגר'}</div>
                </div>
            </div>
            <div>
                <button onClick={updateCard} className={`btn-move ${id <= 0 ? 'disabeld' : ''}`} name="prev" >ימינה</button>
                <button onClick={updateCard} className={`btn-move ${id >= length ? 'disabeld' : ''}`} name="next" >שמאלה</button>
            </div>
        </>
    );
}
