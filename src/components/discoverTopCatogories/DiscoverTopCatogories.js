import React from 'react'
import './DiscoverTopCatogories.css'
import { Card } from 'antd';
import {MobileOutlined} from '@ant-design/icons'
import {LaptopOutlined} from '@ant-design/icons'
import {DollarOutlined} from '@ant-design/icons'
import {CodeOutlined} from '@ant-design/icons'
import {DatabaseOutlined} from '@ant-design/icons'
import {FileDoneOutlined} from '@ant-design/icons'
import {DesktopOutlined} from '@ant-design/icons'
import {CloudOutlined} from '@ant-design/icons'
import {EyeInvisibleOutlined} from '@ant-design/icons'
import {PythonOutlined} from '@ant-design/icons'
import {CodeSandboxOutlined} from '@ant-design/icons'

const DiscoverTopCatogories = () => {
  return (
    <div>
      <div className='CoursesHeading'>
        <h2>DISCOVER TOP CATOGORIES</h2>
      </div>


      <div className='FirstRow'>
        <Card className='each_card'>
                <div className='icon_size'>
                <MobileOutlined />
                </div>
                <br/>
                <p>Devops</p>
        </Card>

        <Card className='each_card'>
                <div className='icon_size'>
                <LaptopOutlined />
                </div>
                <br/>
                <p>Front-End</p>
        </Card>
        <Card className='each_card'>
                <div className='icon_size'>
                <DollarOutlined />
                </div>
                <br/>
                <p>Mobile app dev</p>
        </Card>
        <Card className='each_card'>
                <div className='icon_size'>
                <CodeOutlined />
                </div>
                <br/>
                <p>Digital Marketing</p>
        </Card>
        <Card className='each_card'>
                <div className='icon_size'>
                <FileDoneOutlined />
                </div>
                <br/>
                <p>Frameworks</p>
        </Card>
        <Card className='each_card'>
                <div className='icon_size'>
                <DatabaseOutlined />
                </div>
                <br/>
                <p>Datatypes</p>
        </Card>
        
        </div>

        <div className='SecondRow'>
        <Card className='each_card'>
                <div className='icon_size'>
                <DesktopOutlined />
                </div>
                <br/>
                <p>Software Testing</p>
        </Card>
        <Card className='each_card'>
                <div className='icon_size'>
                <CloudOutlined />
                </div>
                <br/>
                <p>Cloud Computing</p>
        </Card>
        <Card className='each_card'>
                <div className='icon_size'>
                <EyeInvisibleOutlined />
                </div>
                <br/>
                <p>Cyber Security</p>
        </Card>
        <Card className='each_card'>
                <div className='icon_size'>
                <MobileOutlined />
                </div>
                <br/>
                <p>Artificial Intelligence</p>
        </Card>
        <Card className='each_card'>
                <div className='icon_size'>
                <PythonOutlined />
                </div>
                <br/>
                <p>Python</p>
        </Card>
        <Card className='each_card'>
                <div className='icon_size'>
                <CodeSandboxOutlined />
                </div>
                <br/>
                <p>Big Data</p>
        </Card>
        
    </div>



    </div>
  )
}

export default DiscoverTopCatogories
