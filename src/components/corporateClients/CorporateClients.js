import React from 'react'
import './CorporateClients.css'
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

const CorporateClients = () => {
  return (
    <div className='complete_c'>
        <div>
            <h1>Our Corporate Clients</h1>
        </div>
        <div className='contents'>

          <div className='first'>
            <img src={Hcl} alt='HCL' className='row_Image'></img>
            <img src={Cognizont} alt='Cognizant' className='row_Image'></img>
            <img src={Infosys} alt='Infosys' className='row_Image'></img>
            <img src={Accenture} alt='Accenture' className='row_Image'></img>
            <img src={Oracle} alt='Oracle' className='row_Image'></img>
            <img src={Ibm} alt='Ibm' className='row_Image'></img>

          </div>
          <div className='second'>
            <img src={Amazon} alt='Amazon' className='row_Image'></img>
            <img src={Wipro} alt='Wipro' className='row_Image'></img>
            <img src={Flipkart} alt='Flipkart' className='row_Image'></img>
            <img src={Dell} alt='Visa' className='row_Image'></img>
            <img src={Genpact} alt='Visa' className='row_Image'></img>
            <img src={Visa} alt='Visa' className='row_Image'></img>

          </div>
         

        </div>
      
    </div>
  )
}

export default CorporateClients
