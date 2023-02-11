import React from 'react'

export const MenuItem = (props) => {
  return (
    <li
      onClick={props.onClick}
      className={`menu-item ${props.active ? "menu-item--active" : ""}`}
    >
      {/* {props.index} */}
    </li>
  );
};

export default MenuItem