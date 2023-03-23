import React from 'react';

import { SubHeading } from '../../components';
import {images} from '../../constants'

import './AboutMe.css';

const AboutMe = () => (
  <div className='app__bg app__wrapper section__padding' id='about'>
    <div className='app__wrapper_img app__wrapper_img-reverse app__chef-picture'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Bemutatkozás"/>
      <h1 className='headtext__cormorant'>Amiben én hiszek</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>Több éves tapasztalattal rendelkező 2. generációs kútfúró vagyok aki még édesapja mellett kezdte el kitanulni a szakmát és azóta is ezt csinálja.</p> 
        </div>
        <p className='p__opensans'>Célom minőségi szolgáltatást nyújtani elérhető áron, gyorsan megtérülő megoldást kínálok azok számára akik szeretnének spórolni a vízszámlán.Szárazfúrásos technológiával dolgozok melynek előnye a kis helyigény így a nehezebben hozzáférhető kertekben is megoldható a fúrás. </p>
      </div>

      <div className='app__chef-sign'>
        <p>Látó Izsák</p>
        <p className='p__opensans'>Cégtulajdonos</p>
      </div>

    </div>
  </div>
);

export default AboutMe;
