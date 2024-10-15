import React from 'react'
import {NavLink } from "react-router-dom"
const CardCountry = ({country}) => {
  const {flags,name,population,region,capital}=country
  return (
    <div className='card'>
    <div className="card-main">
    <div className="card-container">
          <div className='image-country'>
            {/* <img src="../../public/images/world.png" alt="" /> */}
            <img src={flags.svg} alt="" />
          </div>
          <p className='card-title'>
            {name.common}
          </p>
         <p>
         <span>Capital: </span>
         {capital}
         </p>
         <p>
         <span>Population: </span>
       {population}
         </p>
         <p>
         <span>region: </span>
          {region}
         </p>
    {/* <NavLink to={`/country/id`}>
    <button className='btn'>Read More</button>
    </NavLink> */}
    <NavLink to={`/country/${name.common}`}>
    <button className='btn'>Read More</button>
    </NavLink>
 
        </div>  
    </div>

  </div>
  )
}

export default CardCountry