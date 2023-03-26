import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './FindUs.css';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
    <SubHeading title="Elérhetőségeim"/>
    <h1 className='headtext__cormorant' style={{marginBottom:"3rem"}}>Kapcsolat</h1>
    <div className='app__wrapper-content'>
      <p className='p__opensans'> 2310 Szigetszentmiklós Napfény utca 8</p>
      <p className='p__cormorant' style={{color:"#DCCA87", margin:"2rem 0"}}>Elérhetőség:</p>
      <p className='p__opensans'>Hétfő - Péntek: 09:00 - 18:00</p>
      <p className='p__opensans'>Szombat - Vasárnap: Zárva</p>
    </div>
    </div>

    <div className='app__wrapper_img box__border'>
    <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
