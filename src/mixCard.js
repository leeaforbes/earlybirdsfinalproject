import React from 'react';
import PropTypes from 'prop-types';
import './mixCard.scss';
import { ReactComponent as DropdownIcon } from "./dropdownIcon.svg";

const MixCard = ({ mix }) => {
  return (
    <div className="mix-card">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-11'>
            <div className="mix-card__title">{mix.title}</div>
          </div>
          <div className='col-1'>
            <DropdownIcon/>
          </div>
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
