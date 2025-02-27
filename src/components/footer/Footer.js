import React from 'react'
import './Footer.css'
import logos from '../../assests/images/logo-white.jpg'
import {LinkedinFilled} from '@ant-design/icons'
import { FacebookFilled } from '@ant-design/icons'
import {InstagramFilled} from '@ant-design/icons'
import {TwitterCircleFilled} from '@ant-design/icons'
import {PinterestFilled} from '@ant-design/icons'
import {YoutubeFilled} from '@ant-design/icons'
import { Divider } from 'antd';

const Footer = () => {
  return (
    <div className='full_footer'>
      <div className='top_p'>
        <div className='first_card'>
          <img src={logos} alt='logo' className='img_img'></img>
          <p className='small_align'>
          AchieversIT - Provides a wide group of opportunities for freshers and Experienced candidate who can develop their skills and build their career opportunities across multiple Companies.
          </p>
        </div>
        <div className='second_card' >
          <p>
            <h5 className='head'><strong>COMPANY</strong></h5>
            <ul className='list_style'>
              <li>Home</li>
              <li>Placements</li>
              <li>Corporate Training</li>
              <li>Contact US</li>
            </ul>
          </p>
        </div>
        <div className='third_card'>
          <p>
            <h5 className='head'><strong>TRENDING COURSES</strong></h5>
            <ul className='list_style'>
              <li>UI Development Course</li>
              <li>Angular JS Course</li>
              <li>React JS Course</li>
              <li>Digital Marketing Course</li>
              <li>Python Course</li>
              </ul>
            </p>
        </div>
        <div className='fourth_card'>
              <h5 className='head'><strong>CONTACT INFO</strong></h5>
              <p>#63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage, Bangalore, India - 560029<br/>
              India : +91 8431-040-457<br/>
              info@achieversit.com<br/>
              </p>
        </div>
        </div>
        <Divider className='hr_line' />

        <div className='all_logos'>
          <FacebookFilled className='icn_size'/>
          <InstagramFilled className='icn_size'/>
          <LinkedinFilled className='icn_size'/>
          <TwitterCircleFilled className='icn_size'/>
          <PinterestFilled className='icn_size'/>
          <YoutubeFilled className='icn_size'/>
          
        </div>
        <div className='last_text'>
          <span style={{ color: 'grey' }}>Copyright © 2025 AchieversIT. All Rights Reserved</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Refund Policy</span>
        </div>

        
      
    </div>
    
  )
}

export default Footer
