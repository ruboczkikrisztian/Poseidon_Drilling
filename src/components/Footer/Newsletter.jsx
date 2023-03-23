import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Kapcsolatfelvétel"/>
      <h1 className='headtext__cormorant'>Amennyiben kérdése van</h1>
      <p className='p__opensans'>Vegye fel velem a kapcsolatot!</p>
    </div>


    <form action="https://formsubmit.co/poseidonkutfuras@gmail.com" method="POST">
    <div className='app__newsletter-input flex__center'>
      <input type="text" name="név" placeholder='Név' required />
      <input type="email" name='email' placeholder='Email'/>
      <textarea className='app__newsletter-textarea flex__center' placeholder="Üzenet" name="Üzenet" rows="10" required></textarea>
      <button type="submit" className='custom__button'>Küldés</button>
    </div>
      </form>
  </div>

);

export default Newsletter;
