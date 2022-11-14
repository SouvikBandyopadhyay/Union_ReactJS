import './App.css';
import {useEffect, useState} from 'react';
import Profile from './Components/MainProfile/Profile';
import Home from './Components/Home/Home';
import Sponsor from './Components/Sponsor/Sponsor';
import Navbar from './Components/Navbar/Navbar';
import ProfileList from './Components/ProfileList/ProfileList';
import Footer from './Components/Footer/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
 


function App() {

  const [id,setid]=useState(1);

  return (
    <div className="App">
      <header className="App-header">
      <Navbar></Navbar>
        <Routes>
        
        <Route exact path="/" element={<Home/>}/>
        <Route path="/sponsor" element={<Sponsor/>}/>
        <Route path="/membersarea" element={<ProfileList/>}/>
        <Route path="/profile" element={<Profile id={id}/>}/>
        </Routes>
      <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
