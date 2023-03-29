// AudioFileCardBox.js

import React from 'react';
import AudioFileCard from './AudioFileCard';

const AudioFileCardBox = ({ audios }) => {
  return (
    <div className="audio-file-card-box">
      {audios.map(audio => (
        <div key={audio.id} className="audio-file-card-box__row">
          <AudioFileCard audioFile={audio} />
        </div>
      ))}
    </div>
  );
};

export default AudioFileCardBox;
