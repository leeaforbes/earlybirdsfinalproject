import React from 'react';
import SetCard from './SetCard';
import './SetCardBox.scss';

const SetCardBox = ({ sets, loadSetView, addSetPopup }) => {
  return (
    <div className="container-fluid set-card-box">
      {sets.map(set => (
        <div className="row" key={set.title + set.id}>
          <div className="col">
            <SetCard set={set} loadSetView={loadSetView}/>
          </div>
        </div>
      ))}
      <div
        className='add'
        onClick={addSetPopup}
      > + </div>
    </div>
  );
};

export default SetCardBox;