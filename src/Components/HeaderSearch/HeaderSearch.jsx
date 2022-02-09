import React from 'react';
import { useEffect } from 'react';
import useFilterContext from '../../CustomHooks/UseFilterContext.jsx';
import InputSearch from '../InputSearch/InputSearch.jsx';
import './HeaderSearch.css';


export default function HeaderSearch() {
    const filterManager = useFilterContext();

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
        <div className="container-filter-inputs">
            <InputSearch type="text" name="firstName" value={filterManager?.firstName} onChangeInput={updateFilterFields} placeholder="שם פרטי" />
            <InputSearch type="text" name="lastName" value={filterManager?.lastName} onChangeInput={updateFilterFields} placeholder="שם משפחה" />
            <InputSearch type="text" name="city" value={filterManager?.city} onChangeInput={updateFilterFields} placeholder="עיר" />
        </div>
    );
}
