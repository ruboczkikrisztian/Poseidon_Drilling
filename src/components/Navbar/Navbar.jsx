import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const aszfDownloader = () => {
    // using Java Script method to get PDF file
    fetch('Ászf.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Ászf.pdf';
            alink.click();
        })
    })
}



  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.poseidonlogo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Kezdőlap</a></li>
        <li className="p__opensans"><a href="#about">Bemutatkozás</a></li>
        <li className="p__opensans"><a href="#services">Szolgáltatások</a></li>
        <li className="p__opensans"><a href="#information">Információk</a></li>
        <li className="p__opensans"><a href="#contact">Kapcsolat</a></li>
        <li className="p__opensans"onClick={aszfDownloader}><>Ászf</></li>
      </ul>
      <div className="app__navbar-login">
        <a href="tel:+36702898494" className="p__opensans">📱(70) 289 8494</a>
        <div />
        <a href="https://www.facebook.com/poseidonkutfuras" className="p__opensans">Facebook</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Kezdőlap</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Bemutatkozás</a></li>
              <li><a href="#services" onClick={() => setToggleMenu(false)}>Szolgáltatások</a></li>
              <li><a href="#information" onClick={() => setToggleMenu(false)}>Információk</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Kapcsolat</a></li>
              <li><a href="#aszf" onClick={aszfDownloader}>Ászf</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;