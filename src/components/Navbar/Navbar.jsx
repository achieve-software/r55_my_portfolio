import {Link, NavLink} from 'react-router-dom';
import Hamburger from './Hamburger';
import React, { useState } from "react";
import "./Navbar.scss";
const Navbar = () => {

  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const toogleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  };
    return (
      <>
      <div onClick={()=>{toogleHamburger();}}>
      <Hamburger/>
      </div>
      <header>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
  
            <div className='logo'>
              <Link to='/' className='brand'>CV</Link>
            </div>
            <nav className='nav nav-pills'>
              <NavLink to='/' 
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >Home</NavLink>
              <NavLink to='about'
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >About</NavLink>
              <NavLink to='projects'
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >Projects</NavLink>
               <NavLink to='contact'
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >Contact</NavLink>
            </nav>
  
          </div>
        </div>
      </header>
      <div className='navbar-hamburger' onMouseLeave={()=>setHamburgerOpen(false)}>
          <Link className='link' to="/" >Home</Link>
          <Link className='link' to="/about">About</Link>
          <Link className='link' to="/projects">Projects</Link>
          <Link className='link' to="/contact">Contact</Link>
        </div>

        <style jsx="true">
          {`.navbar-hamburger{
            display:${hamburgerOpen? 'flex' : 'none'}
          }
        `}
        </style>
      </>
    )}

    export default Navbar
