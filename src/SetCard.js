import React from 'react';
import './SetCard.scss';

const SetCard = ({ set }) => {
  const { title, image, date, tags } = set;

  return (
    <div className="set-card">
      <div className="set-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="set-card__details">
        <h3 className="set-card__title">{title}</h3>
        <p className="set-card__date">{date}</p>
        <div className="set-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="set-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SetCard;
