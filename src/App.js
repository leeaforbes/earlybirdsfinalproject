import React from 'react';
import Header from './header';
import  AudioFileCardBox from './AudioFileCardBox.js';
import audios from './data/audios.js';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="grid">
          <div className="left-box">
            <h2>Sets</h2>
            <div className="content"></div>
          </div>
          <div className="right-box-top">
            <h2>Mixes</h2>
            <div className="content"></div>
          </div>
          <div className="right-box-bottom">
            <h2>Audio Files</h2>
            <div className="content">
              <AudioFileCardBox audios={audios} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
