import React from 'react'
import MenuItem from './MenuItem'

export const Menu = (props) => {
  return (
    <ul className="menu">
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