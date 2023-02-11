import React from 'react';

export const MenuItem = (props) => {
  return props.index === 0 ? (
    <p onClick={props.onClick} className={`movie__home`}>
      <i className="fa fa-home"></i>
    </p>
  ) : (
    <p
      onClick={props.onClick}
      className={`movie__radio ${props.active && 'active'}`}
    >
      <p></p>
    </p>
  );
};

export default MenuItem;
