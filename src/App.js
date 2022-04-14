//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Resume from './components/Resume'

// not sure if Footer is needed here?

function App() {
  //const location = useLocation
  return (
    <div className='pages'>
      <Header></Header>
      <BrowserRouter >
        <Routes>
          {/* <Switch location={location} key={location.pathname}> */}
          <Route path='/' element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Work' element={<Work/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Resume' element={<Resume/>} />
          {/* </Switch> */}
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;