import React from 'react';
import './Reviews.css';
import { Carousel, Col, Row, Card, Rate } from 'antd';

const Reviews = () => {
  return (
    <div>
      <div className='CoursesHeading' >
      <h2>REVIEWS</h2>
      </div>

      <Carousel arrows infinite={false}>
        {/* First Slide */}
        <div className='all_cards'>
          <div className='WholeCards'>
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <Card className='EachCard'>
                <div className="card_content">
                  <div className="circle"><h1>L</h1></div>
                  <p className="name"><strong>Lijarani Swain</strong></p>
                </div>

                  <h5><span><i>ReactJS Certification Training</i></span></h5>
                  <Rate disabled defaultValue={5} />
                  <p>Concepts and challenging tasks in real time. Best part of the training is there...</p>
                  <a href='#'>KNOW MORE</a>
                </Card>
              </Col>

              <Col span={6}>
                <Card className='EachCard'>
                  <div className='card_content'>
                  <div className="circle"><h1>K</h1></div>
                  <p className="name"><strong>Koti Nukani</strong></p>
                    
                  </div>
              
                  <h5><span><i>Marketing Certification Training</i></span></h5>
                  <Rate disabled defaultValue={5} />
                  <p>Concepts and challenging tasks in real time. Best part of the training is there...</p>
                  <a href='#'>KNOW MORE</a>
                </Card>
              </Col>

              <Col span={6}>
                <Card className='EachCard'>
                  <div className='card_content'>
                  <div className="circle"><h1>M</h1></div>
                  <p className="name"><strong>Mallika M</strong></p>
                  </div>
               
                  <h5><span><i>Angular, React, and Ionic Training</i></span></h5>
                  <Rate disabled defaultValue={5} />
                  <p>Concepts and challenging tasks in real time. Best part of the training is there...</p>
                  <a href='#'>KNOW MORE</a>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        {/* Second Slide */}
        <div className='all_cards'>
          <div className='WholeCards'>
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <Card className='EachCard'>
                  <div className='card_content'>
                  <div className="circle"><h1>A</h1></div>
                  <p className="name"><strong>Anantha Raja</strong></p>
                  </div>
          
                  <h5><span><i>UI Dev Certification Training</i></span></h5>
                  <Rate disabled defaultValue={5} />
                  <p>Concepts and challenging tasks in real time. Best part of the training is there...</p>
                  <a href='#'>KNOW MORE</a>
                </Card>
              </Col>

              <Col span={6}>
                <Card className='EachCard'>
                  <div className='card_content'>
                  <div className="circle"><h1>Y</h1></div>
                  <p className="name"><strong>Yuvananda</strong></p>
                  </div>
            
                  <h5><span><i>UI & Fullstack Training</i></span></h5>
                  <Rate disabled defaultValue={5} />
                  <p>Concepts and challenging tasks in real time. Best part of the training is there...</p>
                  <a href='#'>KNOW MORE</a>
                </Card>
              </Col>

              <Col span={6}>
                <Card className='EachCard'>
                  <div className='card_content'>
                  <div className="circle"><h1>L</h1></div>
                  <p className="name"><strong>Lijarani Swain</strong></p>
                  </div>
              
                  <h5><span><i>ReactJS Certification Training</i></span></h5>
                  <Rate disabled defaultValue={5} />
                  <p>Concepts and challenging tasks in real time. Best part of the training is there...</p>
                  <a href='#'>KNOW MORE</a>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        {/* Third Slide */}
        <div className='all_cards'>
          <div className='WholeCards'>
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <Card className='EachCard'>
                  <div className='card_content'>
                  <div className="circle"><h1>L</h1></div>
                  <p className="name"><strong>Lijarani Swain</strong></p>
                  </div>
             
                  <h5><span><i>UI & Angular Training</i></span></h5>
                  <Rate disabled defaultValue={5} />
                  <p>Concepts and challenging tasks in real time. Best part of the training is there...</p>
                  <a href='#'>KNOW MORE</a>
                </Card>
              </Col>

              <Col span={6}>
                <Card className='EachCard'>
                  <div className='card_content'>
                  <div className="circle"><h1>D</h1></div>
                  <p className="name"><strong>Dwarak Reddy</strong></p>
                  </div>
                
                  <h5><span><i>ReactJS Certification Training</i></span></h5>
                  <Rate disabled defaultValue={5} />
                  <p>Concepts and challenging tasks in real time. Best part of the training is there...</p>
                  <a href='#'>KNOW MORE</a>
                </Card>
              </Col>

              <Col span={6}>
                <Card className='EachCard'>
                  <div className='card_content'>
                  <div className="circle"><h1>K</h1></div>
                  <p className="name"><strong>Kiran CSN</strong></p>
                  </div>
            
                  <h5><span><i>ReactJS Certification Training</i></span></h5>
                  <Rate disabled defaultValue={5} />
                  <p>Concepts and challenging tasks in real time. Best part of the training is there...</p>
                  <a href='#'>KNOW MORE</a>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Carousel>

      <div className='below_align'>
        <a href='#'>VIEW ALL REVIEWS</a>
      </div>
      <br/>
      <br/>
    </div>
  );
}

export default Reviews;
