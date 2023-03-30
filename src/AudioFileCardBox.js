// AudioFileCardBox.js

import React from 'react';
import AudioFileCard from './AudioFileCard';
import './AudioFileCardBox.scss';

const AudioFileCardBox = ({ audios }) => {
  return (
    <div className="audio-file-card-box">
      {audios.map(audio => (
            <div className='container-fluid'>
                  <AudioFileCard audioFile={audio} />
            </div>
      ))}
    </div>
  );
};

export default AudioFileCardBox;
