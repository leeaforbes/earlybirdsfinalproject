import React from 'react';
import PropTypes from 'prop-types';
import './DetailedMixCard.scss';
import { ReactComponent as DropdownIcon } from "../data/images/dropdownIcon.svg";
import { useState } from 'react';
import audios from '../data/audios';
import AudioFileCardBox from "./DetailedAudioFileCardBox"



const MixCard = ({ mix }) => {
  const [showMixInfo, setShowMixInfo] = useState(false);
  const filteredObjects = audios.filter(obj => mix.audioFileIds.includes(obj.id));
  
  function handleDropdownClick() {
    setShowMixInfo(!showMixInfo);
    console.log('showInfo: ' + showMixInfo);
  }

  return (

    <div className="mix-card">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-11'>
            <div className="mix-card__title">{mix.title}</div>
                { showMixInfo && <div className='row'>
                  <AudioFileCardBox audios={filteredObjects}></AudioFileCardBox>
                </div>
                }  
            </div>
   
          <div className='col-1'>
            <DropdownIcon onClick={handleDropdownClick}/>
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
