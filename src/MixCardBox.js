// MixCardBox.js

import React from 'react';
import MixCard from './mixCard';
import './MixCardBox.scss';

const MixCardBox = ({ mixes, loadMixView, addMixPopup }) => {
  return (
    <div className="container-fluid mix-card-box">
      {mixes.map(mix => (
        <div className="row" key={mix.title + mix.id}>
          <div className="col">
            <MixCard mix={mix} loadMixView={loadMixView} />
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
