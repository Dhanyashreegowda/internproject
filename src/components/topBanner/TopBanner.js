import React from 'react'
import './TopBanner.css';
import { Card } from 'antd';
import BgImage from '../../assests/images/top_bg.jpg'



const TopBanner = () => {
  return (
    <div className='full_body'>

        <div className='image_part'>
        <img
            className="bg_image"
            src={BgImage}// Replace with actual image path
            alt="First slide"
          />
        </div> 

        <div className='content_part'>
        <div className='top_font'>
            <h2 className='big_text'>Why We are on TOP 1</h2>
            <p>More people train with AcheiversIT because of ourcommitment to quality, Placement Support, and Real-time Training.</p>
        </div>


        <div className='full_thing'>

        <Card className='each_cards'>
                <div className='numbers'>
                    <p>135 +</p>
                </div>
                <br/>
                <p>TRENDING COURSES</p>
        </Card>

        <Card className='each_cards'>
                <div className='numbers'>
                    <p>60 +</p>
                </div>
               
                <p>IT Companies are tied-UP to hire our trained students </p>
        </Card>

        <Card className='each_cards'>
                <div className='numbers'>
                    <p>25 +</p>
                </div>
             
                <p>Students attend Interviews every day through our Placement Cell</p>
        </Card>

        <Card className='each_cards'>
                <div className='numbers'>
                    <p>3 +</p>
                </div>
               
                <p>Of our students Get Jobs every day in Bangalore and India</p>
        </Card>
        </div>

        </div>



    </div>
  )
}

export default TopBanner
