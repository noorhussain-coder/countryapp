import React from 'react'
import  countryFact  from "../ApiPost/Country-Data.json"
const About = () => {
  return (
   <section>
    <h2 className='container-title' >Hero are Inertesting facts
    we'ew proub of</h2>

    <div className='card'>
    <div className="card-main" >
   {
    countryFact.map((country)=>{
      const {id,countryName,capital,population,interestingFact}=country
    
      return(
     
        <div className="card-container" key={id}>
              <p className='card-title'>
                  {countryName}
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
             <span>Intersting Fact: </span>
             {interestingFact}
             </p>
  
          </div>
        
      
        
      )
    })
   }
    {/* <div className="card-main">
      <div className="card-container">
            <p className='card-title'>
                CountryName
            </p>
           <p>
           <span>Capital: </span>
           AnyCapital
           </p>
           <p>
           <span>Population: </span>
           AnyPopulation
           </p>
           <p>
           <span>Intersting Fact: </span>
           AnyIntersting Factdadaa
           </p>

        </div>
      
    
      </div> */}
</div>
    </div>
   </section>
)}

export default About