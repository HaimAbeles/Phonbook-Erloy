import React from 'react';

const FilterContext = React.createContext({ firstName: '', SetFirstName: () => {}, lastName: '', SetLastName: () => {}, city: '', SetCity: () => {}, });
export default FilterContext;