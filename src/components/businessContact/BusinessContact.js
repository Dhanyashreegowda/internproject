import React from 'react'
import './BusinessContact.css'
import BgBusiness from '../../assests/images/businessBg.png'
import { Button } from 'antd';

const BusinessContact = () => {
  return (
    <div>
        <div className='full_outerr'>
        <img src={BgBusiness} alt='background' className='outerImagee' />

        <div className='content_content'>
            <p>
                Acheivers IT ! for business
                <br/>
                <div className='inside_writingg'>
                No more dull edges in your company.Make your employees into masters....
                <br/>
                Nurture talent with instructor-led courses on trending technologies
                </div>
                <Button className='contact_button'>CONTACT US</Button>

            </p>

        </div>

        </div>
      
    </div>
  )
}

export default BusinessContact
