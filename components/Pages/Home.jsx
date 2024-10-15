import React from 'react'
import About from './About'

const Home = () => {
  return (
    <main className='hero-section main'>
<div className="home-container">
  <div className="hero-content">
<h1 className='heading-xl'>
  Explore the world ,  One country at a Time
</h1>
<p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, veritatis ducimus. Nihil neque assumenda cum ratione voluptatem corrupti iusto, saepe enim maxime error dolor aspernatur incidunt. Fugiat rem iusto officia.</p>
<button className='btn'>
    Start Exploring
  </button>
  </div>


<div className='hero-image'>
<img className='banner-image' src="../../public/images/world.png" alt="" />

</div>
</div>
<About/>

    </main>
  )
}

export default Home