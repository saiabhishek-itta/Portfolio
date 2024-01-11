import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.png"

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className='nav__logo'>
      <img src={Logo} alt='sidebar_logo'/>
      </a>
    

      <nav className='nav'>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href="#home" className='nav__link'>
                <i className="icon-home"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
    </aside>
  )
}

export default Sidebar