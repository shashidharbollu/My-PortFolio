import React from 'react'
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './About';
import Home from './Home';
import Project from './Project';
import Navbar from './Navbar';
import './App.css'
const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Route path="/" exact component={Home}/>
   <Route path="/About"  component={About}/>
   <Route path="/Project"  component={Project}/>
   </BrowserRouter>
  );
}

export default App
