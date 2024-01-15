import React from 'react';
import "./about.css";
import Aboutimg from "../../assets/avatar-2.svg";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Aboutimg} alt="about image" className="about__img" />
      

        <div className="about__data grid">
          <div className="about__info">
            <div className="about__description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco
              </p>
              <a href="" className="btn">Resume</a>
            </div>

            <div className="about__skills grid">
              
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Java</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage">4</span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Java</h3>
                  <span className="skills__number">1</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage">4</span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Java</h3>
                  <span className="skills__number">1</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage">4</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About