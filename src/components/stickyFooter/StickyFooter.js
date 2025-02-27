import React from 'react'
import './StickyFooter.css'
import {PhoneFilled} from '@ant-design/icons'
import {MailOutlined} from '@ant-design/icons'
import {WhatsAppOutlined} from '@ant-design/icons'
import {UpSquareFilled} from '@ant-design/icons'
import { Button } from 'antd';

const StickyFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Enables smooth scrolling
    });
  };
  return (
    <div className='full_full'>

      <div className='vertical_button'>
         <Button>CONTACT US</Button>
      </div>

      <div className='go_up' onClick={scrollToTop}>
      <UpSquareFilled />
      </div>


    <div className='same_foot'>
        <div className='same_line'>
        <PhoneFilled className='size'></PhoneFilled>
        <p className='padding_part'>Call us on :90328973982</p>
        </div>
        <div className='same_line'>
        <MailOutlined className='size'></MailOutlined>
            <p className='padding_part' >request a call-back</p>
        </div>
        <div className='same_line'>
        <WhatsAppOutlined className='size'></WhatsAppOutlined>
            <p className='padding_part'>Chat with us</p>
        </div>


    </div>
    </div>

  )
}

export default StickyFooter
