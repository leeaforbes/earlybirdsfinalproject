// AudioFileCardBox.js

import React from 'react';
import AudioFileCard from './AudioFileCard';
import './AudioFileCardBox.scss';

const AudioFileCardBox = ({ audios }) => {
  return (
    <div className="audio-file-card-box">
      {audios.map(audio => (
        <div key={audio.id} className="row">
          <div classname="col">
            <AudioFileCard audioFile={audio} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AudioFileCardBox;
