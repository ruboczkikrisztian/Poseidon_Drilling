import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 200;
    } else {
      current.scrollLeft += 200;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__wrapper_info app__myworks">
        <SubHeading title="Eddigi munkáim" />
        <h1 className="headtext__cormorant">Munkáim</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}><b>"Sose halaszd holnapra, amit holnapután is megtehetsz."</b></p>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>"Mark Twain"</p>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;