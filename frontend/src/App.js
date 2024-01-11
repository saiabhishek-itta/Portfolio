import './App.css';
import React from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services';
//import Testimonials from './components/testimonials/Testimonials';
import Testimonials from './components/testimonials/Testimonials'
import Resume from './components/resume/Resume';


function App() {
  return (
    <>
     <Sidebar/>
     <main className='main'>
        <Home/>
        <About/>
        <Portfolio/>
        <Services/>
        <Testimonials/>
        <Resume/>
      </main>
    </>
    )
  }

export default App;
