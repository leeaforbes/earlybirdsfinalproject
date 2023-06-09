// AudioFileCardBox.js

import React from 'react';
import AudioFileCard from './DetailedAudioFileCard';
import './DetailedAudioFileCardBox.scss';

const AudioFileCardBox = ({ audios }) => {
  return (
    <div className="audio-file-card-box">
      <div className='container-fluid'>
      {audios.map(audio => (   
                  <AudioFileCard audioFile={audio} /> 
      ))}
      <div className='row'>
        <div className='col'>
          <div className='add'> + </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AudioFileCardBox;
