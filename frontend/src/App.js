import './App.css';
import React from 'react';
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./components/home/Home"
import About from './components/about/About'; 

function App() {
  return (
    <>
     <Sidebar/>
     <main className='main'>
        <Home/>
        <About/>
      </main>
    </>
    )
  }

export default App;
