import React from 'react';
import PropTypes from 'prop-types';
import './mixCard.scss';

const MixCard = ({ name, audioFileIds }) => {
  return (
    <div className="mix-card">
      <h3>{name}</h3>
      <label htmlFor={`${name}-audio-file`}>Audio File:</label>
      <select id={`${name}-audio-file`} name={`${name}-audio-file`}>
        {audioFileIds.map((id) => (
          <option key={id} value={id}>{id}</option>
        ))}
      </select>
    </div>
  );
};

MixCard.propTypes = {
  name: PropTypes.string.isRequired,
  audioFileIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MixCard;
