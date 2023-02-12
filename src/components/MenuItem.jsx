import React from 'react';

export const MenuItem = (props) => {
  return props.index === 0 ? (
    <div onClick={props.onClick} className={`movie__home`}>
      <i className="fa fa-home"></i>
    </div>
  ) : (
    <div
      onClick={props.onClick}
      className={`movie__radio ${props.active && 'active'}`}
    >
      <p></p>
    </div>
  );
};

export default MenuItem;
