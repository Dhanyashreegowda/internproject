import React from 'react'
import './TrendingCourses.css';
import { Col, Row } from 'antd';
import { Card ,Rate } from 'antd';

import {MobileOutlined} from '@ant-design/icons'
import {LaptopOutlined} from '@ant-design/icons'
import {DollarOutlined} from '@ant-design/icons'
import {CodeOutlined} from '@ant-design/icons'
import {DatabaseOutlined} from '@ant-design/icons'
import {FileDoneOutlined} from '@ant-design/icons'
import {DesktopOutlined} from '@ant-design/icons'
import {CloudOutlined} from '@ant-design/icons'

const { Meta } = Card;

const TrendingCourses = () => {
  return (
    <>
    <div className='CoursesHeading'>
        <h2>TRENDING COURSES</h2>
    </div>
    <div className='WholeCards'>
        <Row gutter={[16, 16]}>
            <Col span={6}>

            <Card className='EachCard'
                hoverable
            >

                <div className='CardContent'>
                    <div className='replace_part1'>
                        <MobileOutlined className='icoo'></MobileOutlined>

                        <h4>ANGULAR DEVELOPMENT COURSE</h4>
                    </div>
                <p className='padding_part'>
                Angular is popular for making dynamic applications and its information official and reliance infusion includes altogether lessen the measure of code dat should be composed...
                </p>
                

                <hr/>
                <h5 ><span><i>Reviews</i></span></h5>
                <Rate disabled defaultValue={5} />
                <span className='rating'>4.7(169)</span>
                </div>

            </Card>

            
            </Col>




            <Col span={6}>
            <Card className='EachCard'
                hoverable
            >
                <div className='CardContent'>
                <div className='replace_part2'>
                        <LaptopOutlined className='icoo'></LaptopOutlined>

                        <h4>REACT DEVELOPMENT COURSE</h4>
                    </div>
                <p className='padding_part'>Achievers IT React JS Certification Course in Bangalore. We taught you in detailed explanations of what React JS is, why we use React JS, What is JSX....
                </p>
                </div>

                <hr/>
                <h5><span><i>Reviews</i></span></h5>
                <Rate disabled defaultValue={5} />
                <span className='rating'>4.9(199)</span>
            </Card>

            </Col>
            <Col span={6}>
            <Card className='EachCard'
                hoverable
            >
                <div className='CardContent'>
                <div className='replace_part3'>
                        <DollarOutlined className='icoo'></DollarOutlined>

                        <h4>MERN DEVELOPMENT COURSE</h4>
                    </div>
                <p className='padding_part'>MEAN Stack Front To Back". In this course we will build an in depth full stack social network application using Angular, Express, React, Redux and MongoDB..
                </p>
                </div>

                <hr/>
                <h5><span><i>Reviews</i></span></h5>
                <Rate disabled defaultValue={3} />
                <span className='rating'>3.7(149)</span>
            </Card>
            </Col>
            <Col span={6}>
            <Card className='EachCard'
                hoverable
            >
                <div className='CardContent'>
                <div className='replace_part4'>
                        <CodeOutlined className='icoo'></CodeOutlined>

                        <h4>WEB. DEVELOPMENT COURSE</h4>
                    </div>
                <p className='padding_part'>MERN Stack Front To Back". In this course we will build an in depth full stack social network application using Node.js, Express, React, Redux and MongoDB...
                </p>
                </div>

                <hr/>
                <h5><span><i>Reviews</i></span></h5>
                <Rate disabled defaultValue={3} />
                <span className='rating'>3.2(109)</span>
            </Card>
            </Col>

            <Col span={6}>
            <Card className='EachCard'
                hoverable
            >
                <div className='CardContent'>
                <div className='replace_part3'>
                        <DatabaseOutlined className='icoo'></DatabaseOutlined>

                        <h4>DIGITAL DEVELOPMENT COURSE</h4>
                    </div>
                <p className='padding_part'>We are one of the top web training institutes in Bangalore offering advanced web development courses to our students. Students will get Trained from Professional Experts...
                </p>
                </div>

                <hr/>
                <h5><span><i>Reviews</i></span></h5>
                <Rate disabled defaultValue={5} />
                <span className='rating'>4.7(169)</span>
            </Card>
            </Col>
            <Col span={6}>
            <Card className='EachCard'
                hoverable
            >
                <div className='CardContent'>
                <div className='replace_part4'>
                        <FileDoneOutlined className='icoo'></FileDoneOutlined>

                        <h4>REACT DEVELOPMENT COURSE</h4>
                    </div>
                <p className='padding_part'>
                Angular is popular for making dynamic applications and its information official and reliance infusion includes altogether lessen the measure of code dat should be composed...
                </p>
                </div>

                <hr/>
                <h5><span><i>Reviews</i></span></h5>
                <Rate disabled defaultValue={5} />
                <span className='rating'>4.7(169)</span>
            </Card>
            </Col>
            <Col span={6}>
            <Card className='EachCard'
                hoverable
            >
                <div className='CardContent'>
                <div className='replace_part1'>
                        <DesktopOutlined className='icoo'></DesktopOutlined>

                        <h4>ANGULAR DEVELOPMENT COURSE</h4>
                    </div>
                <p className='padding_part'>
                Angular is popular for making dynamic applications and its information official and reliance infusion includes altogether lessen the measure of code dat should be composed...
                </p>
                </div>

                <hr/>
                <h5><span><i>Reviews</i></span></h5>
                <Rate disabled defaultValue={5} />
                <span className='rating'>4.9(109)</span>
            </Card>
            </Col>
            <Col span={6}>
            <Card className='EachCard'
                hoverable
            >
                <div className='CardContent'>
                <div className='replace_part2'>
                        <CloudOutlined className='icoo'></CloudOutlined>

                        <h4>CLOUD DEVELOPMENT COURSE</h4>
                    </div>
                <p className='padding_part'>
                Angular is popular for making dynamic applications and its information official and reliance infusion includes altogether lessen the measure of code dat should be composed...
                </p>
                </div>

                <hr/>
                <h5><span><i>Reviews</i></span></h5>
                <Rate disabled defaultValue={5} />
                <span className='rating'>4.8(140)</span>
            </Card>
            </Col>
        </Row>
      
    </div>
    </>
  )
}

export default TrendingCourses
