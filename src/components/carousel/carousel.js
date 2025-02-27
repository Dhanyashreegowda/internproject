import React from 'react';
import './carousel.css';
import { Row,Col } from 'antd';
import { Card } from 'antd';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import firstImage from '../../assests/images/angular_training.jpg'
import secondImage from '../../assests/images/aws_training.jpg'
import thirdImage from '../../assests/images/full_stack_development.jpg'
import fourthImage from '../../assests/images/react_training.jpg'
import fivthImage from '../../assests/images/web_development.jpg'

const MyCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={firstImage}// Replace with actual image path
            alt="First slide"
          />
          <Carousel.Caption className='carouselCaption'>
            <h2>ANGULAR DEVELOPMENT COURSE</h2>
            <Button variant="danger">EXPLORE COURSES</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={secondImage} // Replace with actual image path
            alt="Second slide"
          />
          <Carousel.Caption className='carouselCaption'>
            <h2>AMAZON WEB SERVICES COURSE</h2>
            <Button variant="danger">EXPLORE COURSES</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={thirdImage} // Replace with actual image path
            alt="Third slide"
          />
          <Carousel.Caption className='carouselCaption'>
            <h2>PYTHON DEVELOPMENT COURSE</h2>
            <Button variant="danger">EXPLORE COURSES</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fourthImage} // Replace with actual image path
            alt="fourth slide"
          />
          <Carousel.Caption className='carouselCaption'>
            <h2>REACT JS DEVELOPMENT COURSE</h2>
            <Button variant="danger">EXPLORE COURSES</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fivthImage} // Replace with actual image path
            alt="Third slide"
          />
          <Carousel.Caption className='carouselCaption'>
            <h2>WEB DEVELOPMENT COURSE</h2>
            <Button variant="danger">EXPLORE COURSES</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <div className='carcard Container'>
        <Row gutter={[16, 16]}>

          
          <Col span={8}>  
            <Card className='carouselCard' hoverable>
            <span className='insideCardFirst'>
            <p className='firsttext'>BECOME A </p>
            <b>UI DEVELOPER</b>
            </span>
            <span className='insideCardSecond'>
            <a className='secondtext'>Know More</a>
            </span>
            </Card>
          </Col>

          <Col span={8}>  
            <Card className='carouselCard' hoverable>
            <span className='insideCardFirst'>
            <p className='firsttext'>BECOME A </p>
            <b>ANGULAR DEVELOPER</b>
            </span>
            <span className='insideCardSecond'>
            <a className='secondtext'>Know More</a>
            </span>
            </Card>
          </Col>

          <Col span={8}>  
            <Card className='carouselCard' hoverable >
            <span className='insideCardFirst'>
            <p className='firsttext'>BECOME A </p>
            <b>REACT JS DEVELOPER</b>
            </span>
            <span className='insideCardSecond'>
            <a className='secondtext'>Know More</a>
            </span>
            </Card>
          </Col>


        </Row>
      </div>
  
    </div>
  );
};

export default MyCarousel;
