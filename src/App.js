
import './App.css';
// import About from './components/About';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
function App() {
   const [mode,setMode]=useState('light');
   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#000000';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
   }
  return (
    <>
      <Navbar title="TEXT UTILS" mode={mode} toggleMode={toggleMode} />
      <div className="container">
      <TextForm heading="Enter The Text To Analyze" mode={mode}/>
      {/* <About  ></About> */}

      </div>
    </>
  );
}

export default App;
