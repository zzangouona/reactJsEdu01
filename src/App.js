import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return ( 
    <React.Fragment>
       <MyComponent name={3}/>
       
      <MyComponent/>
    </React.Fragment>
  );
}

export default App;
