
import './App.css';
import About from './components/About';
import Message from './components/Message';
import Navbar from './components/Navbar';
// import { Greet } from './components/Greet';
// import Welcome from './components/Welcome';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState("light")

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = '#4555a4';
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
    
      
      <Navbar heading="Skillbhoomi" mode = {mode} toggleMode={toggleMode}/>
      
      <div className="container my-3">
      <Routes>
          {/* <Route exact path="/about">
           element = <About/>
          </Route>
          <Route exact path="/">
           element = <Message heading = "Enter your text here" mode={mode}/>
          </Route> */}
         
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Message heading = "Enter your text here" mode={mode}/>} />
      </Routes>
        
      
        </div>
    
    </Router>
   </>
  );
}

export default App;
