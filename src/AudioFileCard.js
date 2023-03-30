import React from 'react';
import './AudioFileCard.scss';
import { ReactComponent as FileIcon } from "./file_icon.svg";
import { ReactComponent as EditIcon } from "./pencil-square.svg";
  import { ReactComponent as PlayIcon } from "./play-square.svg";

const AudioFileCard = ({ audioFile }) => {
  return (

      <div className='row'>
        <div className='col'>
          <div className='audio-file-card'>
            <div className='container'>
              <div className='row'>
                <div className='col-2'>
                  <FileIcon style={{ width: '100%', height: '100%' }}/>
                </div>
                <div className='col-9'>
                  <div className="audio-file-card__title">{audioFile.title}</div>
                  <div className="audio-file-card__artist">{audioFile.artist}</div>
                  <div className="audio-file-card__genres">{audioFile.genres.join(', ')}</div>
                  <div className="audio-file-card__length">{audioFile.length}</div>
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
                      <PlayIcon style={{ width: '100%', height: '100%' }}/>
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
