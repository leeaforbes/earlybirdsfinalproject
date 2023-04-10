import React, { useState } from 'react';
import './AudioFileCard.scss';
import { ReactComponent as FileIcon } from "./data/images/file_icon.svg";
import { ReactComponent as EditIcon } from "./data/images/pencil-square.svg";
import { ReactComponent as PlayIcon } from "./data/images/play-square.svg";
import { ReactComponent as TrashIcon } from "./data/images/trash.svg";
import { ReactComponent as UploadIcon } from "./data/images/folder-upload.svg";

import waveform from './data/images/waveform.png';
import pause from './data/images/pause.png';

const AudioFileCard = ({ audioFile }) => {
    const [showPlayAudio, setShowPlayAudio] = useState(false);
    function handleDropdownClick() {
      setIsEditMode(false);
      setShowPlayAudio(!showPlayAudio);
    }

    const [isEditMode, setIsEditMode] = useState(false);
    function toggleEditMode() {
      setShowPlayAudio(false);
      setIsEditMode(!isEditMode);
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
                <div className='col'>
                {isEditMode ? (
                    <>
                      <input type="text" defaultValue={audioFile.title} />
                      <input type="text" defaultValue={audioFile.artist} />
                      <input type="text" defaultValue={audioFile.tags.join(', ')} />
                      <input type="text" pattern="[0-9]{2}:[0-9]{2}" defaultValue={audioFile.length} />
                    </>
                  ) : (
                    <>
                      <div className="audio-file-card__title">{audioFile.title}</div>
                      <div className="audio-file-card__artist">{audioFile.artist}</div>
                      <div className="audio-file-card__tags">{audioFile.tags.join(', ')}</div>
                      <div className="audio-file-card__length">{audioFile.length}</div>
                    </>
                  )}
                </div>

                { showPlayAudio && <Listen /> }
                {isEditMode && <EditButtons />}
                <div className='col-1'>
                  <div className='flex-container h-100'>
                    <div className='row h-50'>
                      <div className='col h-100'>
                        <EditIcon 
                          style={{ width: '100%', height: '100%' }}
                          onClick={toggleEditMode}
                        />
                      </div>
                    </div>
                    <div className='row h-50'>
                      <div className='col h-100'>
                      <PlayIcon 
                        onClick={handleDropdownClick} 
                        style={{ width: '100%', height: '100%' }}
                      />
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

function Listen() {
  return <div className='col-6'>
    <div className='fluid-container m-0'>
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
        </div>
  </div>;
}

function EditButtons() {
  return <div className='col-1'>
                  <div className='flex-container h-100'>
                    <div className='row h-50'>
                      <div className='col h-100'>
                        <UploadIcon 
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                    </div>
                    <div className='row h-50'>
                      <div className='col h-100'>
                      <TrashIcon 
                        style={{ width: '100%', height: '100%' }}
                      />
                      </div>
                    </div>
                  </div>
                </div>;
}

export default AudioFileCard;
