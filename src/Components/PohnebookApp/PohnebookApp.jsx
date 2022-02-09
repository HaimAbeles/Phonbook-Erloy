import React from 'react';
import HeaderSearch from '../HeaderSearch/HeaderSearch.jsx';
import SinglePersonContact from '../SinglePersonContact/SinglePersonContact.jsx';
import useFilterContext from '../../CustomHooks/UseFilterContext.jsx';
import { data } from '../../Data/PhonebookData.json';
import { useState } from 'react';
import { useEffect } from 'react';
import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import './PohnebookApp.css';

export default function PohnebookApp() {
    const [phonbookData, SetPhonbookData] = useState(data);
    const [id, SetId] = useState(0);
    const filterManager = useFilterContext();

    useEffect(() => {
        const tempData = data.filter(x =>
            x.firstName?.includes(filterManager.firstName) &&
            x.city?.includes(filterManager.city) &&
            x.lastName?.includes(filterManager.lastName))
        SetPhonbookData(tempData);
        SetId(0);
    }, [filterManager]);

    return (
        <>
            <div className="root-app">
                <Logo />
                <HeaderSearch />
                <Navigation id={id} length={phonbookData.length - 1} setIndex={SetId} />
                <SinglePersonContact SelectedPhonbookData={phonbookData[id]} length={phonbookData.length - 1} />
            </div>
        </>
    );
}
