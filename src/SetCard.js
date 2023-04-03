import React from 'react';
import './SetCard.scss';

const SetCard = ({ set, loadSetView }) => {
  const { id, title, image, date} = set;

  return (
      <div
        className='set-card'
        onClick={() => loadSetView(id)}
      >
        <div className='row' >
          <div className='col-3'>
              <div className="set-card__image">
              <img src={image} alt={title} />
            </div>

          </div>
          <div className='col-8'>
            <div className="set-card__details">
              <h3 className="set-card__title">{title}</h3>
              <p className="set-card__date">{date}</p>
              <div className="set-card__tags"> 
                {set.tags.join(', ')}
              </div>
            </div>
          </div>
          <div className='col-1'>
            <h3>...</h3>
          </div>
        </div>
      </div>
  );
};

export default SetCard;
