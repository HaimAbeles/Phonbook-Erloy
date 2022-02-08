import React from 'react';
import { useEffect } from 'react';
import useFilterContext from '../../CustomHooks/UseFilterContext.jsx';
import './HeaderSearch.css';


export default function HeaderSearch() {
    const filterManager = useFilterContext();

    useEffect(() => {
        console.log(filterManager)
    }, [filterManager])

    function updateFilterFields(event) {
        switch (event.currentTarget.name) {
            case "firstName":
                filterManager.SetFirstName(event.currentTarget.value);
                break;
            case "lastName":
                filterManager.SetLastName(event.currentTarget.value);
                break;
            case "city":
                filterManager.SetCity(event.currentTarget.value);
                break;
        }
    }

    return (
        <>
            <div className="header-search">
                <input className="search-field" type="text" name="firstName" value={filterManager.firstName} onChange={updateFilterFields} placeholder="שם פרטי" />
                <input className="search-field" type="text" name="lastName" value={filterManager.lastName} onChange={updateFilterFields} placeholder="שם משפחה" />
                <input className="search-field" type="text" name="city" value={filterManager.city} onChange={updateFilterFields} placeholder="עיר" />
            </div>
        </>
    );
}
