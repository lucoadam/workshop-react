import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Examples from './pages/Examples';
import Home from './pages/Home';
import Users from './pages/Users';

export default function App() {
  /**
   *  react-router-dom
   * 
   *  BrowserRouter => /home, /users => normal routing
   *  HashRouter => /#/{eachRoutes} javascript SPA
   *  
   *  Routes
   *    Route =>
   *          props => path, element => which componet to render
   * 
   *  Link props (to) => defines which route element/component to render 
   *  Note: Link, Routes and Route can only be used as child component of BrowserRouter/HashRouter
   */
  return <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/example" element={<Examples/>} />
      <Route path="/users" element={<Users/>} />
    </Routes>
  </BrowserRouter>;
}
