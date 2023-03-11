import React from 'react';
import './MobileMenuToggle.css';

const MobileMenuToggle = (props) => {
  return (
    <div className={`rhr-menu-toggle ${props.isToggled ? 'rhr-toggled' : ''}`}>
      <div className="rhr-bar-1" />
      <div className="rhr-bar-2" />
      <div className="rhr-bar-3" />
    </div>
  );
};

export default MobileMenuToggle;
