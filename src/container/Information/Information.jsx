import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './Information.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="information">
    <div className="app__specialMenu-title">
      <SubHeading title="Általános információk" />
      <h1 className="headtext__cormorant">Információk</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <div className="app__specialMenu_menu_items">
          {data.information.map((informations, index) => (
            <MenuItem key={informations.title + index} title={informations.title} price={informations.price} tags={informations.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <div className="app__specialMenu_menu_items">
          {data.moreinformation.map((moreinformations, index) => (
            <MenuItem key={moreinformations.title + index} title={moreinformations.title} price={moreinformations.price} tags={moreinformations.tags} />
          ))}
        </div>
      </div>
    </div>

   
  </div>
);

export default SpecialMenu;