import React from 'react';
import SetCard from './SetCard';
import './SetCardBox.scss';

const SetCardBox = ({ sets }) => {
  return (
    <div className="set-card-box">
      {sets.map(set => (
        <div className="row">
          <div classname="col">
            <SetCard set={set} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SetCardBox;