import React from 'react';
import './header.scss';
import { ReactComponent as ReminderIcon } from './reminder.svg';
import { ReactComponent as InfoIcon } from './info.svg';
import { ReactComponent as SidebarIcon } from './list.svg';

function Header(props) {
  return (
    <div className="header">
      <div className='header-container fluid-container'>
        <div className='row h-100'>
          <div className='col-2 h-100'>
            <div className='fluid-container'>
              <ReminderIcon style={{ width: '45px', height: '45px' }}/>
              <InfoIcon style={{ width: '45px', height: '45px' }}/>
            </div>
          </div>
          <div className='col-9'>
            <div className='fluid-container'>
              <h1>Set Planner Pro</h1>
            </div>
          </div>
          <div className='col-1'>
            <div className='fluid-container'>
            <SidebarIcon style={{ width: '45px', height: '45px' }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
