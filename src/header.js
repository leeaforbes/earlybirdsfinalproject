import React from 'react';
import './header.scss';
import { ReactComponent as ReminderIcon } from './reminder.svg';
import { ReactComponent as InfoIcon } from './info.svg';


function Header(props) {
  return (
    <div className="header">
      <div className="header-icons">
        <ReminderIcon />
        <InfoIcon />
      </div>
      <h1>Set Planner Pro</h1>
      
    </div>
  );
}

export default Header;
