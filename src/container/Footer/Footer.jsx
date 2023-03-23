import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Kapcsolat</h1>
        <p className="p__opensans">2310 Szigetszentmiklós Napfény utca 8</p>
        <p className="p__opensans">(70) 289 8494</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.poseidonlogo} alt="footer_logo" />
        <p className="p__opensans">&quot;Gondolkodj bátran, ne félj attól, hogy hibákat követsz el! Tartsd nyitva a szemed, az apró részleteket is vedd észre, és legyél mindenben mértéktartó, céljaidat kivéve&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Telefonos Elérhetőség</h1>
        <p className="p__opensans">Hétfő - Péntek:</p>
        <p className="p__opensans">09:00 - 18:00</p>
        <p className="p__opensans">Szombat - Vasárnap:</p>
        <p className="p__opensans">Zárva</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans" style={{textAlign:'center'}}>2023 Poseidon Kútfúrás.</p>
      <p className="p__opensans" style={{textAlign:'center'}}>Minden jog fenntartva.</p>
      <p className="p__opensans" style={{textAlign:'center', marginTop:'20px'}}>Készítette: <a href="mailto:ruboczkikrisztian@gmail.com">Rubóczki Krisztán</a></p>
    </div>

  </div>
);

export default Footer;