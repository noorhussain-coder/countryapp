import {NavLink} from "react-router-dom"
import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="container">
   
            <div className=" navbar ">
            <div className="logo">
                <NavLink to="/" >
                    <h1>World Country</h1>
                </NavLink>
            </div>
            <nav>
              <ul>
              <li> <NavLink to={"/"}>Home</NavLink></li>
               <li> <NavLink to="about">About</NavLink></li>
               <li> <NavLink to="contact">Contact</NavLink></li>
               <li> <NavLink to="country">Country</NavLink></li>
              </ul>
            </nav>
            <div className="ham0-menu"></div>
            </div>
        </div>
    </header>
  )
}

export default Header