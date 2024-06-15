import './App.css';
import React, { useState } from 'react';
import Textutils from './components/Textutils';
//import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  const [mode, setMode] = useState('light'); // Initialize mode to 'light'
  
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white";
    } else {
      setMode('dark');
      document.body.style.backgroundColor = "#212529";
    }
  }

  return (
    <>

    <Navbar mode={mode} toggleMode={toggleMode} />
    <Textutils mode={mode} toggleMode={toggleMode} />
      {/* <Router>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Textutils" element={<Textutils mode={mode} toggleMode={toggleMode} />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
