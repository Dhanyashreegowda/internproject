import React from 'react'
import './TrainersFrom.css'
import { Col, Row} from 'antd';
import BackGImage from '../../assests/images/back-4.jpg'
import Cognizont from '../../assests/images/cognizant.png'
import Hcl from '../../assests/images/HCL.png'
import Infosys from '../../assests/images/infosys.png'
import Accenture from '../../assests/images/accenture.png'
import Oracle from '../../assests/images/oracle.png'
import Ibm from '../../assests/images/ibm.png'
import Amazon from '../../assests/images/amazon.png'
import Visa from '../../assests/images/visa.png'
import Wipro from '../../assests/images/wipro.png'
import Flipkart from '../../assests/images/flipkart.png'
import Dell from '../../assests/images/dell.png'
import Genpact from '../../assests/images/genpact.png'




const TrainersFrom = () => {
  return (
    <div className='full_card'>
        <h2>Our Trainers From</h2>

        <div>
            <Row gutter={[16, 16]}>
                
                <Col span={6}>
                    <div className='outer'>
                        <img src={BackGImage} alt='BackGImage' className='outerImage' />
                        <img src={Cognizont} alt='Cognizont' className='innerImage' />
                    </div>
                </Col>


                <Col span={6}>
                <div className='outer'>
                        <img src={BackGImage} alt='BackGImage' className='outerImage' />
                        <img src={Hcl} alt='Hcl' className='innerImage' />
                </div>
                </Col>
                <Col span={6}>
                <div className='outer'>
                        <img src={BackGImage} alt='BackGImage' className='outerImage' />
                        <img src={Infosys} alt='Infosys' className='innerImage' />
                    </div>
                    </Col>
                <Col span={6}>
                <div className='outer'>
                        <img src={BackGImage} alt='BackGImage' className='outerImage' />
                        <img src={Accenture} alt='Accenture' className='innerImage' />
                    </div>
                </Col>



                <Col span={6}>
                <div className='outer'>
                        <img src={BackGImage} alt='BackGImage' className='outerImage' />
                        <img src={Oracle} alt='Oracle' className='innerImage' />
                    </div>
                    </Col>
                <Col span={6}>
                <div className='outer'>
                        <img src={BackGImage} alt='BackGImage' className='outerImage' />
                        <img src={Ibm} alt='Ibm' className='innerImage' />
                    </div>
                </Col>
                <Col span={6}>
                <div className='outer'>
                        <img src={BackGImage} alt='BackGImage' className='outerImage' />
                        <img src={Amazon} alt='Amazon' className='innerImage' />
                    </div>
                    </Col>
                <Col span={6}>
                <div className='outer'>
                        <img src={BackGImage} alt='BackGImage' className='outerImage' />
                        <img src={Visa} alt='Visa' className='innerImage' />
                    </div>
                    </Col>

                <Col span={6}>
                <div className='outer'>
                        <img src={BackGImage} alt='BackGImage' className='outerImage' />
                        <img src={Wipro} alt='Wipro' className='innerImage' />
                    </div>
                    </Col>
                <Col span={6}>
                <div className='outer'>
                        <img src={BackGImage} alt='BackGImage' className='outerImage' />
                        <img src={Flipkart} alt='Flipkart' className='innerImage' />
                    </div>
                    </Col>
                <Col span={6}>
                <div className='outer'>
                        <img src={BackGImage} alt='BackGImage' className='outerImage' />
                        <img src={Dell} alt='Dell' className='innerImage' />
                    </div>
                    </Col>
                <Col span={6}>
                <div className='outer'>
                        <img src={BackGImage} alt='BackGImage' className='outerImage' />
                        <img src={Genpact} alt='Genpact' className='innerImage' />
                    </div>
                    </Col>



            </Row>
        </div>
      
    </div>
  )
}

export default TrainersFrom
