import './App.css';
import React, { useState } from 'react';
import PohnebookApp from './Components/PohnebookApp/PohnebookApp.jsx';
import FilterContext from './Context/FilterContext.jsx';
import logo from './logo.png'
//import UploadUsers from './Components/UploadUsers/UploadUsers.jsx';

function App() {

  const [firstName, SetFirstName] = useState('');
  const [lastName, SetLastName] = useState('');
  const [city, SetCity] = useState('');

  return (
    <FilterContext.Provider value={{firstName, SetFirstName, lastName, SetLastName, city, SetCity}}>
      <div className="App">
        <div className="logo" style={{backgroundImage: `url(${logo})` }}></div>
        <PohnebookApp />
        {/* <UploadUsers /> */}
      </div>
    </FilterContext.Provider>
  );
}

export default App;
