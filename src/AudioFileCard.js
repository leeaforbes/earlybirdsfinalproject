import React, { useState } from 'react';
import './AudioFileCard.scss';
import { ReactComponent as FileIcon } from "./data/images/file_icon.svg";
import { ReactComponent as EditIcon } from "./data/images/pencil-square.svg";
import { ReactComponent as PlayIcon } from "./data/images/play-square.svg";
import waveform from './data/images/waveform.png';
import pause from './data/images/pause.png';

const AudioFileCard = ({ audioFile }) => {
    const [showPlayAudio, setShowPlayAudio] = useState(false);
    function handleDropdownClick() {
      setShowPlayAudio(!showPlayAudio);
      console.log('showInfo: ' + showPlayAudio);
    }

  return (

    

      <div className='row'>
        <div className='col'>
          <div className='audio-file-card'>
            <div className='container'>
              <div className='row'>
                <div className='col-2'>
                  <FileIcon style={{ width: '100%', height: '100%' }}/>
                </div>
                <div className='col-2'>
                  <div className="audio-file-card__title">{audioFile.title}</div>
                  <div className="audio-file-card__artist">{audioFile.artist}</div>
                  <div className="audio-file-card__genres">{audioFile.genres.join(', ')}</div>
                  <div className="audio-file-card__length">{audioFile.length}</div>
                </div>
                <div className='col-7'>
                { showPlayAudio && <div className='fluid-container m-0'>
                    <div className='row h-70'>
                      <div className='fluid-container m-0'>
                        <img className='waveform' src={waveform} alt='waveform'/>
                      </div>
                    </div>
                    <div className='row h-30'>
                      <div className='col'>
                        <img className='pause' src={pause} alt='pause' style={{ width: '20px', height: '20px' }}/>
                      </div>
                    </div>
                  </div> }
                </div>
                <div className='col-1'>
                  <div className='flex-container h-100'>
                    <div className='row h-50'>
                      <div className='col h-100'>
                        <EditIcon style={{ width: '100%', height: '100%' }}/>
                      </div>
                    </div>
                    <div className='row h-50'>
                      <div className='col h-100'>
                      <PlayIcon onClick={handleDropdownClick} style={{ width: '100%', height: '100%' }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  );
};

export default AudioFileCard;
