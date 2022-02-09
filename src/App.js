import './App.css';
import React, { useEffect, useState } from 'react';
import PohnebookApp from './Components/PohnebookApp/PohnebookApp.jsx';
import FilterContext from './Context/FilterContext.jsx';
import HelloApp from './Components/HelloApp/HelloApp';

function App() {

  const [firstName, SetFirstName] = useState('');
  const [lastName, SetLastName] = useState('');
  const [city, SetCity] = useState('');
  const [helloApp, SetHelloApp] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetHelloApp(false);
    }, 1000);
  }, [])

  return (
    <>
      {
        helloApp ? <HelloApp /> :
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
