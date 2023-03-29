import React from 'react';
import './AudioFileCard.scss'

const AudioFileCard = ({ audioFile }) => {
  return (
    <div className="audio-file-card">
      <div className="audio-file-card__title">{audioFile.title}</div>
      <div className="audio-file-card__artist">{audioFile.artist}</div>
      <div className="audio-file-card__genres">{audioFile.genres.join(', ')}</div>
      <div className="audio-file-card__length">{audioFile.length}</div>
      <div className="audio-file-card__bpm">{audioFile.bpm}</div>
    </div>
  );
};

export default AudioFileCard;
