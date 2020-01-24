import React from 'react';
import './App.css';

import Heading from './Heading';
import Counter from './Counter';
import Step from './Step';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <Heading text='Licznik ReactJS'/>
      </header>
      <Counter initValue={0}/> 
    </div>
  ); 
}

export default App;
