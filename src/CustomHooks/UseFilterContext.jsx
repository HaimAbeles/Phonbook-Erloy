import { useContext } from 'react';
import FilterContext from '../Context/FilterContext.jsx';


export default function useFilterContext() {
    return useContext(FilterContext);
}