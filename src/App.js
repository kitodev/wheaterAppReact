import React, { useState,   useEffect } from 'react';
import './App.css';
import Info from './components/info/Info'
import Country from './components/country/Country';

const App = () => {
  let [tempSymbol, setTempSymbol] = useState('F');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139');
      const data = await response.json();
      console.log(data.list);
    })();
  }, []);
  return (
    <main>
      <Info tempSymbol={tempSymbol} setTempSymbol={() => setTempSymbol(tempSymbol === 'F' ? 'C' : 'F')} />
      <Country cities={cities[0]} tempSymbol={tempSymbol} />
      <Country cities={cities[1]} tempSymbol={tempSymbol}/>
    </main>
  );
}

export default App;
