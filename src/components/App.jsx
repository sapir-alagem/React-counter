import React from 'react';
import './App.scss';
import Counter from './Counter';

function App({ title }) {
  return (
    <div className="App">
      <h1>{title}</h1>
      <Counter initialCount={0} />
      <Counter initialCount={15} />
    </div>
  );
}

export default App;
