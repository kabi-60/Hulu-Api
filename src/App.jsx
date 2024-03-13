import React, { useState } from 'react'
import Header from './Component/Header/Header'
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Result from './Component/Results/Result';
import requests from './Component/Helpers/requests'
const App = () => {
  const[selectedOption, setSelectedOption]=useState(requests.fetchTrending);
  console.log(selectedOption);
 
  return (
    <div className='app'>
        <Header/>
        <Navbar setSelectedOption={setSelectedOption}/>
        <Result selectedOption={selectedOption}/>
    </div>
  )
}

export default App
