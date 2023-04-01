import React from 'react';
import PropTypes from 'prop-types';
import './mixCard.scss';
import { ReactComponent as DropdownIcon } from "./dropdownIcon.svg";
import audioFileIcon from './audiofile.png';
import AudioFileCard from './AudioFileCard';
import { ReactComponent as EditIcon } from "./pencil-square.svg";
import { ReactComponent as PlayIcon } from "./play-square.svg";
import wave from './wave.png';
import pause from './pause.png';
import trash from './trash.png';
import upload from './upload.png';
import { useState } from 'react';
import audioCard from './audioCard';

const MixCard = ({ mix }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div className="mix-card">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-11'>
            <div className="mix-card__title">{mix.title}</div>
            <div className='row'>
             
         <div className='col'>
          <div className='audio-file-card'>
            <div className='container'>
              <div className='row'>
                <div className='col-2 p-0'>
                <img src={audioFileIcon} alt='add from'/>
                </div>
                <div className='col-8'>
                  <div className='row'>
                    <div className='col'>
                      <div className="audio-file-card__title"> title </div> 
                    </div>
                    <div className='col-1 p-0'>
                      <img src={trash} alt='trash'/>
                    </div>
                    <div className='col-1 p-0'>
                      <img src={upload} alt='upload'/>
                    </div>
                  </div>
                  <div className='row'>
                    <div className="audio-file-card__artist"> artist </div>
                  </div>
                  <div className='row'>
                    <div className="audio-file-card__genres"> genre </div>
                  </div>
                  <div className='row'>
                    <div className="audio-file-card__length"> length </div>
                  </div>
      
                </div>

                <div className='col-1'>
                  <div className='flex-container h-100'>
                    <div className='row h-50'>
                      <div className='col h-100'>
                        <EditIcon style={{ width: 40, height: 40 }}/>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div> 

        <div className='col'>
          <div className='audio-file-card'>
            <div className='container'>
              <div className='row'>
                <div className='col-2 p-0'>
                <img src={audioFileIcon} alt='add from'/>
                </div>
                <div className='col-2'>
                  <div className="audio-file-card__title"> title </div>
                  <div className="audio-file-card__artist"> artist </div>
                  <div className="audio-file-card__genres"> genre </div>
                  <div className="audio-file-card__length"> length </div>
                </div>
                
                <div className='col-6'>
                  <div className='row-6'>

                    <img src={wave} alt='wave'/>
                  </div>
                  <div className='row-1'>
                  
                    <div className='col-1 mx-auto'>
                      <img src={pause} alt='pause'/>
                    
                  </div> 
                </div>
                </div>

                <div className='col-1'>
                  <div className='flex-container h-100'>
                    <div className='row h-50'>
                      <div className='col h-100'>
                      </div>
                    </div>
                    <div className='row h-50'>
                      <div className='col h-100'>
                      <PlayIcon style={{ width: 40, height: 40}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          </div>
          </div>
          </div>
          <div className='col-1'>
            {/* <DropdownIcon onClick={() => {setShowInfo(!showInfo)}}>
            { showInfo ? <Component /> : null }
            </DropdownIcon> */}
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
