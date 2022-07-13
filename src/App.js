import './App.css';
import React from 'react';
import Title from './Title';
import bg from './images/bg2.jpeg';
function App() {
  return (
    <div className="App">
          <Title image={bg} title={'Welcome!'} />
    </div>
  );
}

export default App;
