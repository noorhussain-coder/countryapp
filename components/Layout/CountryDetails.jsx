import React, { useEffect, useState, useTransition } from 'react'
import { getCountryIndData } from '../ApiPost/Apipost'
import { NavLink, useParams } from 'react-router-dom'
import Loader from '../Pages/Loader'


const CountryDetails = () => {
  
  
  const [isPending,startTransition]=useTransition()
  const [country,SetCountry]=useState()
  const params=useParams()

  useEffect(()=>{
    startTransition(async()=>{
        const res= await getCountryIndData(params.id)
        console.log(res)
        // SetCountry(res.data[0])
        if(res.status ===200){
            SetCountry(res.data[0])
           
        }

        
    })
  },[])
  if(isPending) return <Loader/>
  console.log(params)


    return (
    <div className='detail-container'>
        <div className="card-detail">
          {country &&(
            <>
              <div className="detail-image">
                <img src={country.flags.svg} alt="" />
                </div>  
                <div className='card-content'>
                    <p className='card-title'>Card Title</p>
                    <div className='infocontainer'>
                        <p className='card-description'>
                            <span>
                                Native Names :
                            </span>
                            {Object.keys(country.name.nativeName)
                            //  .map((key)=>country.name.nativeName[key].common).join(", ")
                            }
                        </p>
                        <p className='card-description'>
                            <span>
                                Population :
                            </span>
                            {country.population.toLocaleString()
                           
                            }
                        </p>
                        <p className='card-description'>
                            <span>
                                Region :
                            </span>
                            {country.region}
                        </p>
                        <p className='card-description'>
                            <span>
                                sub Regin :
                            </span>
                            {country.subregion}
                        </p>
                        <p className='card-description'>
                            <span>
                                Capital :
                            </span>
                              {country.capital}
                        </p>
                        <p className='card-description'>
                            <span>
                                Top level Domain :
                            </span>
                            {country.tld[0]}
                        </p>
                        <p className='card-description'>
                            <span>
                                Curencies :
                            </span>
                            {Object.keys(country.currencies)}
                        </p>
                        <p className='card-description'>
                            <span>
                                Language :
                            </span>
                            {Object.keys(country.languages)}
                        </p>
                    </div>
                    </div>  
            </>
          )}    
    <div className="country-card ">
        <NavLink to="/country">
          <button className='btn'>Go back</button>
        </NavLink>
        </div>    
        </div>
    </div>
  )
}

export default CountryDetails