import './App.css';
import {useEffect, useState} from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import ProfileList from './Components/ProfileList/ProfileList';
import Footer from './Components/Footer/Footer';
import Events from './Components/Events/Events';
import Logos from './Components/Logos/Logos';

import { BrowserRouter, Routes, Route } from "react-router-dom";
 


function App() {

  const [id,setid]=useState(1);

  return (
    <div className="App">
      <header className="App-header">
      <Logos></Logos>
      <Navbar></Navbar>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/membersarea" element={<ProfileList/>}/>
        <Route path="/events" element={<Events/>}/>
        </Routes>
      <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
