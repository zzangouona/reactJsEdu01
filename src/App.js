import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import MyComponentFunc from './components/MyComponentFunc';

function App() {
  return ( 
    <React.Fragment>
       <MyComponent name={"정윤아"} value={5} />

      <MyComponent name={"짱유나"} value={55}/>
      <MyComponentFunc name={"정윤아"} value={5} />
    </React.Fragment>
  );
}

export default App;
