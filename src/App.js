import React, { useState } from 'react';
import './App.css';
import Info from './components/info/Info'

const App = () => {
  let [tempSymbol, setTempSymbol] = useState('F');
  return (
    <main>
      <Info tempSymbol={tempSymbol} setTempSymbol={() => setTempSymbol(tempSymbol === 'F' ? 'C' : 'F')} />
    </main>
  );
}

export default App;
