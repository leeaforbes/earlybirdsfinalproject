// AudioFileCardBox.js

import React from 'react';
import AudioFileCard from './AudioFileCard';
import './AudioFileCardBox.scss';

const AudioFileCardBox = ({ audios, addAudioPopup, editAudio }) => {
  return (
    <div className="audio-file-card-box">
      <div className='container-fluid'>
      {audios.map(audio => (   
                  <AudioFileCard audioFile={audio} editAudio={editAudio} /> 
      ))}
      <div className='row'>
        <div className='col'>
          <div
            className='add'
            onClick={addAudioPopup}
          > + </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AudioFileCardBox;
