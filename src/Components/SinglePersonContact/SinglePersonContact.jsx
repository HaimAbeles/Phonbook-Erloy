import React from 'react';
import { useEffect } from 'react';
import { Linking } from 'react-native';
import './SinglePersonContact.css';
import addressIcon from '../../Images/icons/address.png';
import cityIcon from '../../Images/icons/city.png';
import homePhoneIcon from '../../Images/icons/homePhone.png';
import mobileIcon from '../../Images/icons/mobile.png';
import FieldContact from '../FieldContact/FieldContact';

export default function SinglePersonContact({ SelectedPhonbookData, length }) {

    function openCall(event) {
        Linking.openURL(`tel:${event.currentTarget.innerText.replaceAll('-', '')}`)
    }

    function sendContactWhatsapp() {
        Linking.openURL(`https://wa.me/?text=${SelectedPhonbookData.firstTitle} ${SelectedPhonbookData.firstName} ${SelectedPhonbookData.lastName} ${SelectedPhonbookData.lastTitle}
         נייד: ${SelectedPhonbookData.mobile} טלפון: ${SelectedPhonbookData.homePhone}`);
    }
    return (
        <div className="container-contact">

            <div className="box-contact">
                {length <= 0 ?
                    <div></div>
                    :
                    <>
                        <div className="name-contact">{SelectedPhonbookData?.firstTitle} {SelectedPhonbookData?.firstName} {SelectedPhonbookData?.lastName} {SelectedPhonbookData?.lastTitle}</div>
                        <div className="container-fields-contact">
                            <FieldContact icon={addressIcon} headerField="רחוב" field={SelectedPhonbookData?.address} isLink={false} />
                            <FieldContact icon={cityIcon} headerField="עיר" field={SelectedPhonbookData?.city} isLink={false} />
                            <FieldContact icon={homePhoneIcon} headerField="טלפון" field={SelectedPhonbookData?.homePhone} onClickHendler={openCall} isLink={true} />
                            <FieldContact icon={mobileIcon} headerField="נייד" field={SelectedPhonbookData?.mobile} onClickHendler={openCall} isLink={true} />
                        </div>
                    </>
                }
            </div>

            {/*
            <div>
                <button onClick={sendContactWhatsapp}>שתף בווטסאפ</button>
            </div> */}
        </div>
    );
}
