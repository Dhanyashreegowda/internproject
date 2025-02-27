import React from 'react'
import './RecentAdd.css'
import { Col, Row } from 'antd';
import { Card,Rate } from 'antd';

import {MobileOutlined} from '@ant-design/icons'
import {LaptopOutlined} from '@ant-design/icons'
import {DollarOutlined} from '@ant-design/icons'
import {CodeOutlined} from '@ant-design/icons'


const { Meta } = Card;




const RecentAdd = () => {
  return (
    <div>
        <div className='CoursesHeading'>
           <h2>RECENT ADDITIONS</h2>
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

                        <h4>VUEJS DEVELOPMENT COURSE</h4>
                    </div>
                <p className='padding_part'>
                With AchieversIT's UI development course in bangalore, you will be able to master the concepts such as CSS3, CSS, HTML, JavaScript, Bootstrap,...
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
                    <div className='replace_part2'>
                        <LaptopOutlined className='icoo'></LaptopOutlined>

                        <h4>REACT DEVELOPMENT COURSE</h4>
                    </div>
                    
                <p className='padding_part'>VueJs framework that is gaining a reputation as being a lightweight alternative to different framework and
                libraries Vuejs is a progressive JavaScript framework....
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

                        <h4>WORDPRESS DEVELOPMENT COURSE</h4>
                    </div>
                <p className='padding_part'>World Press development Course In this course we will build an in depth full stack social network application using Angular, Express, React, Redux and MongoDB..
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
                    
                                            <h4>PYTHON DEVELOPMENT COURSE</h4>
                                        </div>
                <p className='padding_part'>Big data, Machine Learning and Data Science using Python programming certification course authorize every one to study data science approach from basics. ...
                </p>
                </div>

                <hr/>
                <h5><span><i>Reviews</i></span></h5>
                <Rate disabled defaultValue={3} />
                <span className='rating'>3.2(109)</span>
            </Card>
            </Col>

            </Row>
                  
         </div>

      
    </div>
  )
}

export default RecentAdd
