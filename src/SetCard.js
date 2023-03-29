import React from 'react';
import './SetCard.scss';

const SetCard = ({ set }) => {
  const { title, image, date, tags } = set;

  return (
    
    <div className="set-card">
      <div className='row' >
        <div className='col'>
          <div className="set-card__image">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className='col'>
          <div className="set-card__details">
            <h3 className="set-card__title">{title}</h3>
            <p className="set-card__date">{date}</p>
            <div className="set-card__tags"> 
              {set.tags.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetCard;
