// MixCardBox.js

import React from 'react';
import MixCard from './mixCard';
import './MixCardBox.scss';

const MixCardBox = ({ mixes }) => {
  return (
    <div className="container-fluid mix-card-box">
      {mixes.map(mix => (
        <div className="row">
          <div className="col">
            <MixCard mix={mix} />
          </div>
        </div>
      ))}
      <div className='row'>
        <div className='col'>
          <div className='add'> + </div>
        </div>
      </div>
    </div>
  );
};

export default MixCardBox;
