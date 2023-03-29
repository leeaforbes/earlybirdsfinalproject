import React from 'react';
import PropTypes from 'prop-types';
import './mixCard.scss';

const MixCard = ({ mix }) => {
  return (
    <div className="mix-card">
      <div className='row'>
        <div className='col'>
          <div className="mix-card__title">{mix.title}</div>
        </div>
      </div>
    </div>
  );
};

MixCard.propTypes = {
  name: PropTypes.string.isRequired,
  audioFileIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MixCard;
