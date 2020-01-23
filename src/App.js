import React from 'react';
import './App.css';

import Heading from './Heading';
import Counter from './Counter';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <Heading text='Licznik'/>
        <Heading text='Podtytuł'/>
      </header>
      <Counter initValue={99}/> 
      <Counter initValue={5}/>
    </div>
  ); 
}

export default App;
