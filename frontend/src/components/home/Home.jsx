import React from 'react'
import "./home.css";
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';


const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Sai Abhishek</h1>
        <span className="home__education">Full Stack Engineer</span>
      </div>
      <HeaderSocials/>
    </section>
  )
}

export default Home