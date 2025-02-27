import React, { useState } from 'react'
import './JobOpenning.css'
import { Col, Row} from 'antd';
import BackGImage from '../../assests/images/back-6.jpg'
import BackGDown from '../../assests/images/accor_back.jpg';
import {DownOutlined} from '@ant-design/icons'



const JobOpenning = () => {
    const [flag1, setFlag1] = useState(false)
    const [flag2, setFlag2] = useState(false)
    const [flag3, setFlag3] = useState(false)
    const [flag4, setFlag4] = useState(false)
    const [flag5, setFlag5] = useState(false)
    const [flag6, setFlag6] = useState(false)
  return (
    
    <div className='whole_thing'>
        <div>
            <h2>Latest Job Openings</h2>
        </div>
        <div className='whole_card'>
        <Row gutter={[16, 16]}>
        <Col span={12}>
            <div className='outerr' >
                <div className='inner_content' 
                style={{ backgroundImage: `url(${BackGImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <p>
                    <h4>Front End Developer - Angular js,Nodejs</h4>
                    <br/>
                    Location : Bangalore
                    </p>
                    
                    <button sytle={{ cursor:"pointer" }} onClick ={()=> setFlag1(!flag1)}><DownOutlined/></button>     
                </div>
                
                <span className='scrolled_content'
                >   
                {flag1 &&
                <div className='bgbg'>
                 <p>Role : Angular Developer with Javascript
                Note : immediate joiner would be great.
                Job Responsibilities 
                - Involvement in the full development life cycle of projects. Working as a part of a team as well as on your own initiative.
                - Facilitate in the decision-making processes with team members both in terms of new system development and enhancement to current systems Skills Required Experience required 2-4 years.
                - Strong knowledge and 2+ years of experience in JavaScript and the Angular 2+ Framework.
                - Experience of full software development life cycle and Agile Strong verbal & written skills required to interact with global teams. Highly motivated, analytical thinking individual.
                - Exposure to basic experience in WPF is desirable. Since this role involves working closely with users, the ideal candidate would have Knowledge of Relational database/SQL.
                - Ability to multi-task and work against deadlines/priorities.
                - Sense of ownership and desire to take on an expanded role over time. Eager to work with new technologies and apply them towards enterprise-level data solutions.
                - Capable of working with a global team and thriving in a team development environment. Advanced problem-solving skills and the ability to deal with real world business issues.</p>
                </div> }  
                </span>

            </div>
    
        <div className='outerr'>
                 
                <div className='inner_content' 
                style={{ backgroundImage: `url(${BackGImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <p>
                    <h4>Senior Software Engineer - Java Full Stack Developer</h4>
                    <br/>
                    Location : Bangalore
                    </p>
                    <button sytle={{ cursor:"pointer" }} onClick ={()=> setFlag2(!flag2)}><DownOutlined/></button>     
                </div> 
                <span className='scrolled_content'>   
                {flag2 && 
                <div className='bgbg'>
                <p>Role : Angular Developer with Javascript
                Note : immediate joiner would be great.
                Job Responsibilities :
                - Involvement in the full development life cycle of projects. Working as a part of a team as well as on your own initiative.
                - Facilitate in the decision-making processes with team members both in terms of new system development and enhancement to current systems Skills Required Experience required 2-4 years.
                - Strong knowledge and 2+ years of experience in JavaScript and the Angular 2+ Framework.
                - Experience of full software development life cycle and Agile Strong verbal & written skills required to interact with global teams. Highly motivated, analytical thinking individual.
                - Exposure to basic experience in WPF is desirable. Since this role involves working closely with users, the ideal candidate would have Knowledge of Relational database/SQL.
                - Ability to multi-task and work against deadlines/priorities.
                - Sense of ownership and desire to take on an expanded role over time. Eager to work with new technologies and apply them towards enterprise-level data solutions.
                - Capable of working with a global team and thriving in a team development environment. Advanced problem-solving skills and the ability to deal with real world business issues.</p>
                </div> }  
                </span>
              
            </div>
        
        <div className='outerr'>
                <div className='inner_content' 
                style={{ backgroundImage: `url(${BackGImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <p>
                    <h4>UI Developer - AngularJS Frameworks</h4>
                    <br/>
                    Location : Bangalore
                    </p>
                    <button sytle={{ cursor:"pointer" }} onClick ={()=> setFlag3(!flag3)}><DownOutlined/></button>     
                </div> 
                <span className='scrolled_content'>   
                {flag3 && 
                <div className='bgbg'>

                <p>Role : Angular Developer with Javascript
                Note : immediate joiner would be great.
                Job Responsibilities :
                - Involvement in the full development life cycle of projects. Working as a part of a team as well as on your own initiative.
                - Facilitate in the decision-making processes with team members both in terms of new system development and enhancement to current systems Skills Required Experience required 2-4 years.
                - Strong knowledge and 2+ years of experience in JavaScript and the Angular 2+ Framework.
                - Experience of full software development life cycle and Agile Strong verbal & written skills required to interact with global teams. Highly motivated, analytical thinking individual.
                - Exposure to basic experience in WPF is desirable. Since this role involves working closely with users, the ideal candidate would have Knowledge of Relational database/SQL.
                - Ability to multi-task and work against deadlines/priorities.
                - Sense of ownership and desire to take on an expanded role over time. Eager to work with new technologies and apply them towards enterprise-level data solutions.
                - Capable of working with a global team and thriving in a team development environment. Advanced problem-solving skills and the ability to deal with real world business issues.</p>
                </div> }  
                </span>   
            </div>
            </Col>

        <Col span={12}>
  
        <div className='outerr'>
                <div className='inner_content' 
                style={{ backgroundImage: `url(${BackGImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <p>
                    <h4>Python Developer ( Fresher ) Requirement.</h4>
                    <br/>
                    Location : Bangalore
                    </p>
                    <button sytle={{ cursor:"pointer" }} onClick ={()=> setFlag4(!flag4)}><DownOutlined/></button>     
                </div> 
                <span className='scrolled_content'>   
                {flag4 && 
                <div className='bgbg'>
                <p>Role : Angular Developer with Javascript
                Note : immediate joiner would be great.
                Job Responsibilities :
                - Involvement in the full development life cycle of projects. Working as a part of a team as well as on your own initiative.
                - Facilitate in the decision-making processes with team members both in terms of new system development and enhancement to current systems Skills Required Experience required 2-4 years.
                - Strong knowledge and 2+ years of experience in JavaScript and the Angular 2+ Framework.
                - Experience of full software development life cycle and Agile Strong verbal & written skills required to interact with global teams. Highly motivated, analytical thinking individual.
                - Exposure to basic experience in WPF is desirable. Since this role involves working closely with users, the ideal candidate would have Knowledge of Relational database/SQL.
                - Ability to multi-task and work against deadlines/priorities.
                - Sense of ownership and desire to take on an expanded role over time. Eager to work with new technologies and apply them towards enterprise-level data solutions.
                - Capable of working with a global team and thriving in a team development environment. Advanced problem-solving skills and the ability to deal with real world business issues.</p>
                </div> }  
                </span>     
            </div>
            
        <div className='outerr'>
                <div className='inner_content'
                style={{ backgroundImage: `url(${BackGImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <p>
                    <h4>UI UX Designer / Developer</h4>
                    <br/>
                    Location : Bangalore
                    </p>
                    <button sytle={{ cursor:"pointer" }} onClick ={()=> setFlag5(!flag5)}><DownOutlined/></button>     
                </div> 
                <span className='scrolled_content'>   
                {flag5 && 
                <div className='bgbg'>
                <p>Role : Angular Developer with Javascript
                Note : immediate joiner would be great.
                Job Responsibilities :
                - Involvement in the full development life cycle of projects. Working as a part of a team as well as on your own initiative.
                - Facilitate in the decision-making processes with team members both in terms of new system development and enhancement to current systems Skills Required Experience required 2-4 years.
                - Strong knowledge and 2+ years of experience in JavaScript and the Angular 2+ Framework.
                - Experience of full software development life cycle and Agile Strong verbal & written skills required to interact with global teams. Highly motivated, analytical thinking individual.
                - Exposure to basic experience in WPF is desirable. Since this role involves working closely with users, the ideal candidate would have Knowledge of Relational database/SQL.
                - Ability to multi-task and work against deadlines/priorities.
                - Sense of ownership and desire to take on an expanded role over time. Eager to work with new technologies and apply them towards enterprise-level data solutions.
                - Capable of working with a global team and thriving in a team development environment. Advanced problem-solving skills and the ability to deal with real world business issues.</p> 
                </div>}  
                </span>
            </div>
          
        <div className='outerr'>
                <div className='inner_content'
                style={{ backgroundImage: `url(${BackGImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <p>
                    <h4>.Net senior Developer- 5positions</h4>
                    <br/>
                    Location : Bangalore
                    </p>
                    <button sytle={{ cursor:"pointer" }} onClick ={()=> setFlag6(!flag6)}><DownOutlined/></button>     
                </div> 
                <span className='scrolled_content'>   
                {flag6 && 
                <div className='bgbg'>
                <p>Role : Angular Developer with Javascript
                Note : immediate joiner would be great.
                Job Responsibilities :
                - Involvement in the full development life cycle of projects. Working as a part of a team as well as on your own initiative.
                - Facilitate in the decision-making processes with team members both in terms of new system development and enhancement to current systems Skills Required Experience required 2-4 years.
                - Strong knowledge and 2+ years of experience in JavaScript and the Angular 2+ Framework.
                - Experience of full software development life cycle and Agile Strong verbal & written skills required to interact with global teams. Highly motivated, analytical thinking individual.
                - Exposure to basic experience in WPF is desirable. Since this role involves working closely with users, the ideal candidate would have Knowledge of Relational database/SQL.
                - Ability to multi-task and work against deadlines/priorities.
                - Sense of ownership and desire to take on an expanded role over time. Eager to work with new technologies and apply them towards enterprise-level data solutions.
                - Capable of working with a global team and thriving in a team development environment. Advanced problem-solving skills and the ability to deal with real world business issues.</p> 
                </div>}  
                </span>     
            </div>
            </Col>
        </Row>
        </div>
      
    </div>
  )
}

export default JobOpenning

