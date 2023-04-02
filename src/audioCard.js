import './AudioCard.scss';
import React from 'react';
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
import audios from './data/audios.js';

function AudioCard(idx){

  var result = audios.find(item => item.id === 1);
  
  return(
<div className='audio-file-card'>
  <div className='container'>
    <div className='row'>
      <div className='col-2 p-0'>
      <img src={audioFileIcon} alt='add from'/>
      </div>
      <div className='col-8'>
        <div className='row'>
          <div className='col'>
            <div className="audio-file-card__title"> {result.title} </div> 
          </div>
          <div className='col-1 p-0'>
            <img src={trash} alt='trash'/>
          </div>
          <div className='col-1 p-0'>
            <img src={upload} alt='upload'/>
          </div>
        </div>
        <div className='row'>
          <div className="audio-file-card__artist"> {result.artist} </div>
        </div>
        <div className='row'>
          <div className="audio-file-card__genres"> {result.genres} </div>
        </div>
        <div className='row'>
          <div className="audio-file-card__length"> {result.length} </div>
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
  );
};

export default AudioCard;