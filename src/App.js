import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
import './App.css';
import { useState } from 'react';
import Alertshow from './Components/Alertshow';
import About from './Components/About';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";  


function App(props) {
  const toggleMode=()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode IS Enabled","success");
      document.title = "Textutil - Dark-Mode";
      
    } else {
      setMode('light');  
      document.body.style.backgroundColor='white';
      showAlert("Light Mode IS Enabled","success");
      document.title = "Textutil - Light-Mode";
    }
    
  }
const [mode,setMode] = useState('light'); //weather dark mode is enabled or not
const [alert,setalert] = useState(null);
const showAlert = (message,type)=>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setalert(null);
  },1500)
}
  return (
    <>
    {/* const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/about" element={<About />}>
      <Route path="/" element={<Textbox showAlert={showAlert} title="Enter Text Here" mode={mode}/>} />
      
    </Route>
  )
); */}
    {/* <Router>
      
    <Navbar logo="Bhautik" mode={mode} toggleMode={toggleMode}/>
    <Alertshow alert={alert}/>
   
    <div className="container ">
     
     <Routes>
        <Route path="/" exact element={<Textbox showAlert={showAlert} title="Enter Text Here" mode={mode}/>} />
        <Route path="/about" exact element={<About/>} />
     </Routes >
       </div>
     </Router>  */}
   </>
    
  );
}

export default App;
