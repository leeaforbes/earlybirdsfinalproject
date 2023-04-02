import React from 'react';
import SetCard from './SetCard';
import './SetCardBox.scss';

const SetCardBox = ({ sets, loadSetView }) => {
  return (
    <div className="container-fluid set-card-box">
      {sets.map(set => (
        <div className="row">
          <div className="col">
            <SetCard set={set} loadSetView={loadSetView}/>
          </div>
        </div>
      ))}
      <div className='add'> + </div>
    </div>
  );
};

export default SetCardBox;