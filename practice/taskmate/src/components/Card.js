import React from 'react'
import girl from '../assets/photo-1576248004793-2c21b24b7bcc.avif';
function Card() {
  return (
    <div>
        <h2>Card</h2>
        <p>Description</p>
        {/* <img width={'300px'} src="https://images.unsplash.com/photo-1576248004793-2c21b24b7bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" /> */}

<img className='girl' src={girl} alt="" />
    </div>
  )
}

export default Card