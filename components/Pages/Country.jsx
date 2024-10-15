import React, { useEffect, useState, useTransition } from 'react'
import CardCountry from '../Layout/Card-Country'
import { getCountryData } from '../ApiPost/Apipost' 
import Loader from './Loader'

const Country = () => {


  const [countries,setCounties]=useState([])
  const [isPending,startTransition]=useTransition()

useEffect ( ()=>{
  startTransition(async()=>{
    const res=await getCountryData()
  console.log("res",res)
  // console.log("resdata",res.data)
  setCounties(res.data)
  })
},[])
console.log("pending",isPending)
console.log("count",countries)
if(isPending) return <Loader/>

  return (
    <section>
    <h2 className='container-title' >Hero are Inertesting facts
    we'ew proub of</h2>

   {/* <CardCountry/> */}

  <ul className='grid-country'>
  {
    countries.map((curCountry,index)=>{
      return <CardCountry country={curCountry} key={index}/>
    })
   }
  </ul>
   </section>
  )
}

export default Country