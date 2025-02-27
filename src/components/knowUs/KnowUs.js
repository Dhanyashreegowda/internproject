import React from 'react'
import './KnowUs.css'
import Bgg from '../../assests/images/know-us.jpg'
import { Button } from 'antd';

const KnowUs = () => {
  return (
    <div className='full'>


        <div className='bg'>
           <img src={Bgg} className='actualImage'></img>
        </div>

        <div className='content_in'>
            <h1 className='title_align'>KNOW US BETTER FOR YOUR FUTURE !</h1>
            <hr/>
            <p className='top_para'>
            We, AchieversIT are here to assist you in gaining the best deal of knowledge and landing at your dream job. Fresher or experienced, we always have a hope to hop into new domains and fields to quicken up the pace in our career growth. AchieversIT is dedicated to its services to enhance your skills to make a better move towards a better future in your career.
            </p>
            <p className='top_para'>
            AchieversIT has been delivering outstanding quality training in IT sector courses. 8 years of experience in furnishing qualitative training, AchieversIT has gained its own fame in leading an individual to land at their dream job
            </p>
            <p className='top_para'>
            Are you looking out for a job or job switch? Despite the fact that your background relates to technical or non-technical, you can always find a choice for you with us. AchieversIT is your best training partner to help you move forward in your career with confidence and ample amount of knowledge. AchieversIT provides different trainings to boost up your vocation, namely :
            </p>
            <p>
              <ol type='1'>
                <li className='olcontent'><strong>Front-end-Course</strong>
                <br/>
                    <p>User Interface Development ; Web Interface Development ; Angular Training ; ReactJS Development ;     VueJS Development ; BootStrap Development ; Material Development.</p>

                    <ul className='unordered'>
                        <li>AchieversIT can be listed out as the best UI Development training centre, whereas locates UI Development training in Bangalore ; UI Development training in Marathahalli ; also benefits as UI training online and UI Developer training.</li>
                        <li>AchieversIT stands out as the best Angular Development training centre, whereas locates Angular Development training in Bangalore ; Angular training in Marathahalli; also benefits as Angular training online and Angular online training. Also the courses come with variations like Angular UI Bootstrap ; AngularJS UI Bootstrap ; Angular JavaScript ; JavaScript AngularJS.</li>
                        <li>AchieversIT is stated as the best ReactJS training centre, whereas locates ReactJS training in Bangalore ; ReactJS development training in Bangalore; React training in BTM; ReactJS training in Marathahalli; also benefits as ReactJS training online and ReactJS online training ; React training ; React native training.</li> <br/>
                    </ul>
                </li>
                <li className='olcontent'><strong>Back-end Courses:</strong>
                  <br/>
                Microsoft.NET ; PHP ; Python ; Ruby ; Java</li>
                <li className='olcontent'><strong>Mobile Development Courses :</strong>
                <br/>
                Android App Development ; IOS App App Development ; Windows App Development ; Hybrid App Development.</li>
                <li className='olcontent'><strong>Full Stack Development Courses :</strong>
                <br/>
                Java Full Stack Training ; Net Full Stack Training ; Node.JS Full Stack Training ; PHP Full Stack Training ; MEAN Full Stack Training ; MERN Full Stack Training.</li>
                <li className='olcontent'><strong>Digital Marketing Courses :</strong>
                <br/>
                Digital Marketing ; Affiliate Marketing ; Email Marketing ; Google Analytics ; Lead Generation ; Remarketing ; Search Engine Optimization ; SMS Marketing ; Social Media Marketing ; WordPress.</li>
                <li className='olcontent'><strong>Database Programming Courses :</strong>
                <br/>
                MySQL Training ; Oracle Training ; Mongo DB Training ; NoSQL Training ; PostgreSQL Training.</li>
                <li className='olcontent'><strong>Project Management Courses :</strong>
                <br/>
                Prince2 Training ; PMP Training ; Six Sigma Training.</li>
              </ol>
            </p>

            <p>
            <h5><strong>Apart from imparting skills and knowledge, AchieversIT comes up with flexible modes of training :</strong></h5>

              Classroom Training in Bangalore
              Live Virtual Training with Instructor-Led Sessions
              Self-Study (e-Learning)
            </p>
            <p>
            <h5><strong> You can choose your mode of training according to your comfort and achieve your courses with certifications.</strong></h5>

            <strong>Perks and advantages of learning with AchieversIT :</strong>
            <br/>
            <ol >
            
              <li>90 hours of training</li>
              <li>Reasonable course fees</li>
              <li>200 hours of lab practical sessions under experts mentorship</li>
              <li>Hands-on experience with case studies with real-time examples</li>
              <li>24*7 access and support by the team</li>
              <li>Industry experts & Certified trainers</li>
              <li>100% placement support</li>
              <li>Industry-aligned curriculum with current market trends and needs</li>
              <li>Extra hours of inputs for non-technical individuals</li>
              <li>Flexible mode of learning</li>

            </ol>
                
              
            </p>

            <p>
            <h5><strong>You get to attend JOB-Oriented training with real-time knowledge and live projects which comes at an affordable price with effective Instructor-led sessions.</strong></h5>

            We, at AchieversIT strive to deliver our best efforts; and concentrate and help you in achieving your dream job you always wished for. We are dedicated to deliver excellence and impart knowledge to the individuals aspiring a career in not only IT sectors but also in various other fields like Digital Marketing, Project Management etc. Our curriculum for all the courses is reviewed systematically to keep our candidates at the cutting edges of technologies.
            </p>
            <div className='below_partt'>
              <strong>impressed by Us? Enroll Now</strong><br/>
              Structure your learning and get a certificate to prove it.<br/>
              <br/>
              <span><label>EMAIL</label>
              <input type='email' placeholder="EMAIL"></input></span>
              <span><label>CONTACT NUMBER</label>
              <input type="tel" placeholder="CONTACT NUMBER"></input></span>
              <span>
                

              </span>
          
              <span>
                <Button className='contact_button'>REACH US</Button>
              </span>
            </div>
        </div>
      

    </div>
  )
}

export default KnowUs

