import React from 'react'
import './header.css'
import logo from '../../assests/images/logo-white.jpg'


const header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='' className='logo'/>
      <div className='full_list'>
      <ul className='unordered_list'>
        <li className='single'>All Courses</li>
        <li className='single'>Placements</li>
        <li className='single'>Internships</li>
        <li className='single'>Existing Students</li>
        <li className='single' >About Us</li>
        <li className='single'>About Us</li>
        <li className='single'>Reviews</li>
        <li className='single'>Blog</li>

      </ul>
      </div>

    </div>
  )
}

export default header
