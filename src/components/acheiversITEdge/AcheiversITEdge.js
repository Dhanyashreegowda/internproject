import React from 'react'
import './AcheiversITEdge.css'
import { Card } from 'antd';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import {faInfinity} from '@fortawesome/free-solid-svg-icons'
import {faHourglassHalf} from '@fortawesome/free-solid-svg-icons'
import {faChartLine} from '@fortawesome/free-solid-svg-icons'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'


const AcheiversITEdge = () => {
  return (
    <div>

        <div className='CoursesHeading'>
            <h2>Acheivers IT Edge</h2>
        </div>

        <div className='complete_card'>

        <Card className='card_s'>
            <div className='all_icon'>
            <FontAwesomeIcon icon={faCircleCheck} style={{color: "#74C0FC",}} />
            </div>
            <p><b>Real Time Doubt Resolution</b></p>
            <p>With Live Instructors</p>
        </Card>

        <Card className='card_s'>
            <div className='all_icon'>
            <FontAwesomeIcon icon={faInfinity} style={{color: "#74C0FC",}} />
            </div>
            
            <p><b>Real Time Doubt Resolution</b></p>
            <p>With Live Instructors</p>
        </Card>

        <Card className='card_s'>
        <div className='all_icon'>
        <FontAwesomeIcon icon={faHourglassHalf} style={{color: "#74C0FC",}} />
            </div>
            <p><b>Real Time Doubt Resolution</b></p>
            <p>With Live Instructors</p>
        </Card>

        <Card className='card_s'>
        <div className='all_icon'>
        <FontAwesomeIcon icon={faChartLine} style={{color: "#74C0FC",}} />
            </div>
            <p><b>Real Time Doubt Resolution</b></p>
            <p>With Live Instructors</p>
        </Card>


        </div>
      
    </div>
  )
}

export default AcheiversITEdge
