import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import MyMusic from './pages/MyMusic';
import CreatePlaylists from './pages/CreatePlaylists';
import IndiaMusic from './pages/IndiaMusic';
import Language from './pages/Language';
import AllTimeHit from './pages/AllTimeHit';
import Register from './pages/Register';
import Sidebar from './components/Sidebar';
//import Player from './components/Player';
//import MultiPlayer from './components/MultiPlayer';
import React from 'react';
import { Player } from './components/Player';






function App() {
  return (<>
  
    <Router>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Mymusic" element={<MyMusic/>}></Route>
        <Route path="/Createplaylists" element={<CreatePlaylists/>}></Route>
        <Route path="/Indiamusic" element={<IndiaMusic/>}></Route>
        <Route path="/language" element={<Language/>}></Route>
        <Route path="/alltimehit" element={<AllTimeHit/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
      </Routes>
      </Sidebar>
     
    </Router>
    <div className='p-audio'>
   <Player/>
   </div>
   </>
    );
    
  
}

export default App;
