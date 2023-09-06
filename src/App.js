
import './App.css';
import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox'
import React, { useState } from 'react';


function App() {
  let [darkMode , pageColor] = useState('light')

  const toggleMode=()=>{
    if(darkMode==='dark'){
      pageColor('light')
      document.body.style.backgroundColor = 'white'

    }
    else{
      pageColor('dark')
      document.body.style.backgroundColor = 'black'
    }
  }
  return (
    <>
    <Navbar title='TextUtils' darkMode={darkMode} toggleMode={toggleMode}/>
    <div className='container'>

    <SearchBox darkMode={darkMode}/>
    </div>
    </>
   );
}

export default App;
