import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals, action} from './Urls'
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action} title="Actions" isSmall />
    </div>
  );
}

export default App;
