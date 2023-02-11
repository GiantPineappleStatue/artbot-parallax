import React from 'react'
import MenuItem from './MenuItem'
import './menu.css'

export const Menu = (props) => {
  return (
    <ul className="menu movie__radio__wrapper">
      {new Array(6).fill(null).map((_, index) => (
        <MenuItem
          key={index}
          index={index}
          active={props.currentSection === index}
          onClick={() => props.setSection(index)}
        />
      ))}
    </ul>
  );
};

export default Menu