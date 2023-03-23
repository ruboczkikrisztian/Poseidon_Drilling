import React from 'react';

import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import './Services.css';

const ServicesCard = ({service: { imgUrl, title}}) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="award" />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
    </div>
  </div>
) 

const Services = () => (
  <div className='app__bg app__wrapper section__padding' id='services'>
    <div className='app__wrapper_info'>
      <SubHeading title="Szolgáltatásaink"/>
      <h1 className='headtext__cormorant'>Szolgáltatások</h1>

      <div className='app__laurels_awards'>
      {data.services.map((service) => <ServicesCard service={service} key={service.title}/>)}
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.laurels} alt="services" />
    </div>
  </div>
);

export default Services;
