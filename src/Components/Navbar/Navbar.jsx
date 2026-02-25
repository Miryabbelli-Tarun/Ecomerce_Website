import React, { useState } from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  let [isOpen,setIsOpen]=useState(false)
  return (
    <div className='navbar'>
      <div className="heading">
          <FaBars onClick={()=>setIsOpen(true)} />
          <div className={`sidebar ${isOpen ?'active' :''}`}>
            <IoClose className='close-icon' onClick={()=>setIsOpen(false)} />
            <ul>
              <li>Shop All</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <Link to='/'><h3 className='navbar-title'>EQUALS</h3></Link>
      </div>
      <div className='search'>
          <FaSearch />
          <input type="text" />
      </div>
      <div className="profile">
         <FaUserCircle className='profile-icon'/>
          <button>Login</button>
      </div> 
      
    </div>
  )
}

export default Navbar;