import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display : 'flex' , justifyContent: 'space-evenly' ,background : 'pink', borderRadius : 5}}>
        <Link className='data' to={'/'}><p>Home</p></Link>
        <Link className='data' to={'/about'}><p>About</p></Link>
        <Link className='data' to={'/services'}><p>Services</p></Link>

      
    </div>
  )
}

export default Navbar