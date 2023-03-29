import React from 'react';
import Header from './header';
import  AudioFileCardBox from './AudioFileCardBox.js';
import audios from './data/audios.js';
import mixes from './data/mixes.js';
import sets from './data/sets.js';
import './App.scss';
import MixCardBox from './MixCardBox';
import SetCardBox from './SetCardBox';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="grid">
          <div className="left-box">
            <h2>Sets</h2>
            <div className="content">
              <SetCardBox sets={sets}/>
            </div>
          </div>
          <div className="right-box-top">
            <h2>Mixes</h2>
            <div className="content">
              <MixCardBox mixes={mixes} />
            </div>
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
