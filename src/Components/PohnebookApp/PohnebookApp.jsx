import React from 'react';
import HeaderSearch from '../HeaderSearch/HeaderSearch.jsx';
import SinglePersonContact from '../SinglePersonContact/SinglePersonContact.jsx';
import useFilterContext from '../../CustomHooks/UseFilterContext.jsx';
import { data } from '../../Data/PhonebookData.json';
import { useState } from 'react';
import { useEffect } from 'react';

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

    useEffect(() => {
        console.log(phonbookData);
    }, [phonbookData]);

    return (
        <>
            <HeaderSearch />
            <SinglePersonContact SelectedPhonbookData={phonbookData[id]} setIndex={SetId} id={id} length={phonbookData.length - 1} />
        </>
    );
}
