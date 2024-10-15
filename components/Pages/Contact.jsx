import React from 'react'

const Contact = () => {
  return (
    <div className="main-form">
      <form action="">
    <div className="form-container">
    
      <input type="text" placeholder='ENTER YOUR EMAIL' name='username' />
      <input type="email" placeholder='ENTER YOUR EMAIL' name='email' />
      <textarea name="mesage " placeholder='Enter your message' id=""></textarea>
      
       <button className='btn'> Send</button> 
    </div>
      </form>
    </div>
  )
}

export default Contact