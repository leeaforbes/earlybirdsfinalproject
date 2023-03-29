// MixCardBox.js

import React from 'react';
import MixCard from './mixCard';
import './MixCardBox.scss';

const MixCardBox = ({ mixes }) => {
  return (
    <div className="mix-card-box">
      {mixes.map(mix => (
        <div className="row">
          <div classname="col">
            <MixCard mix={mix} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MixCardBox;
