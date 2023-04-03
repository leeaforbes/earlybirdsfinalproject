// MixCardBox.js
import React from 'react';
import MixCard from './DetailedMixCard';
import './DetailedMixCardBox.scss';

const MixCardBox = ({ mixes, addMixPopup }) => {
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
          <div
            className='add'
            onClick={addMixPopup}
          > + </div>
        </div>
      </div>
    </div>
  );
};

export default MixCardBox;
