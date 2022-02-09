import './App.css';
import React, { useEffect, useState } from 'react';
import PohnebookApp from './Components/PohnebookApp/PohnebookApp.jsx';
import FilterContext from './Context/FilterContext.jsx';
import HellowApp from './Components/HellowApp/HellowApp';

function App() {

  const [firstName, SetFirstName] = useState('');
  const [lastName, SetLastName] = useState('');
  const [city, SetCity] = useState('');
  const [hellowApp, SetHellowApp] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetHellowApp(false);
    }, 1000);
  }, [])

  return (
    <>
      {
        hellowApp ? <HellowApp /> :
          <FilterContext.Provider value={{ firstName, SetFirstName, lastName, SetLastName, city, SetCity }}>
            <div className="App">
              <PohnebookApp />
              {/* <UploadUsers /> */}
            </div>
          </FilterContext.Provider>
      }
    </>
  );
}

export default App;
