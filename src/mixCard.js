import React, { useState } from 'react';
import './mixCard.scss';
import { ReactComponent as DropdownIcon } from "./data/images/dropdownIcon.svg";
import audios from './data/audios';
import AudioFileCardBox from "./AudioFileCardBox";
import SetMenu from './SetMenu';
import mixes from './data/mixes'


const MixCard = ({ mix, loadMixView , addAudioFileToMix, setMixes, selectedMix}) => {
  const [showMixInfo, setShowMixInfo] = useState(false);
  const filteredObjects = audios.filter(obj => mix.audioFileIds.includes(obj.id));
  const [mixAudios, setMixAudios] = useState(mix.audioFileIds);

  function handleDropdownClick() {
    setShowMixInfo(!showMixInfo);
    console.log('showInfo: ' + showMixInfo);
  }

  function handleDrop(e) {
    e.preventDefault();
    const audioFileId = parseInt(e.dataTransfer.getData('audioFileId'), 10);

    const mixIndex = mixes.findIndex(mix2 => mix2.id === mix.id);
  
    console.log("index %d", mixIndex);
    // Make a copy of the mix with the new audio file id added
    const updatedMix = {
      ...mixes[mixIndex],
      audioFileIds: [...mixes[mixIndex].audioFileIds, audioFileId]
    };

    

    console.log("adding audio %d to mix %d", audioFileId, mix.id);
    console.log(updatedMix.audioFileIds);
    console.log("updated mix: %o", updatedMix);
    // Create a new array with the updated mix
    const updatedMixes = [
      ...mixes.slice(0, mixIndex),
      updatedMix,
      ...mixes.slice(mixIndex + 1)
    ];
    console.log(updatedMixes);
    
    setMixes(updatedMixes);
    }
    
    function handleDragStart(e) {
        e.dataTransfer.setData('mixId', mix.id);
        console.log("dragging mix %d", mix.id);
    }
    function handleDragOver(e) {
    e.preventDefault();
    }

    let style = {};
  if (mix.id === selectedMix) {
    style = {boxShadow: "0 0 4px 1px white"};
  }

  return (
    <div className="mix-card"
    draggable="true"
    onDragStart={(e) => handleDragStart(e, mix.id)}
    style={style}
    onClick={() => loadMixView(mix.id)}
    onDrop={handleDrop}
    onDragOver={handleDragOver}
    >
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10'>
            <div className="mix-card__title">{mix.title}</div>
            <div className="mix-card__numFiles">({mix.audioFileIds.length}) </div>
          </div>
          <div className='col-2 set-menu px-4'>
            <SetMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

// not used anymore
// MixCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   audioFileIds: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default MixCard;
