import { useState } from 'react';
import React from 'react';
import Header from './header';
import  AudioFileCardBox from './AudioFileCardBox.js';
import audios_raw from './data/audios.js';
import mixes from './data/mixes.js';
import sets from './data/sets.js';
import './App.scss';
import MixCardBox from './MixCardBox';
import SetCardBox from './SetCardBox';
import DetailedSetView from './DetailedStuff/DetailedSetView';

import Sidebar from './Sidebar';
import Reminders from './Reminders'
// import ReminderAlert from './ReminderAlert'
import AddSet from './AddSet'
import AddMix from './AddMix'
import AddAudio from './AddAudio'

function App() {

  const [setView, setSetView] = useState(-1)

  const [showSidebar, setShowSidebar] = useState(false)
  const [showReminders, setShowReminders] = useState(false)
  // const [showReminderAlert, setShowReminderAlert] = useState(false)
  const [showAddAudio, setShowAddAudio] = useState(false)
  const [showAddMix, setShowAddMix] = useState(false)
  const [showAddSet, setShowAddSet] = useState(false)

  const [audios, setAudios] = useState(audios_raw)

  function loadSetView(id) {
    setSetView(id)
  }

  function toggleSidebar() {
    setShowSidebar(!showSidebar)
  }
  
  function toggleReminders(){
    setShowReminders(!showReminders)
  }
  
  function addSetPopup(value){
    setShowAddSet(value)
  }

  function addMixPopup(value){
    setShowAddMix(value)
  }
  
  function addAudioPopup(value){
    setShowAddAudio(value)
  }

  function editAudio(newAudio){
    // console.log("attempting to edit audio", newAudio)

    const audiosCopy = audios.map((a, i) => {
      if(i === newAudio.id){
        return newAudio
      } else {
        return a
      }
    })

    setAudios(audiosCopy)

    // audios[newAudio.id] = newAudio
  }

  return (
    <>
    
    { showSidebar ? <Sidebar toggleSidebar={toggleSidebar}/> : null}
    { showReminders ? <Reminders /> : null}
    { showAddSet ? <AddSet addSetPopup={() => addSetPopup(false)} /> : null}
    { showAddMix ? <AddMix addMixPopup={() => addMixPopup(false)} /> : null}
    { showAddAudio ? <AddAudio addAudioPopup={() => addAudioPopup(false)} /> : null}

    { (setView !== -1) ? <DetailedSetView id={setView} backButtonOnClick={() => loadSetView(-1)} toggleSidebar={toggleSidebar} toggleReminders={toggleReminders} addMixPopup={() => addMixPopup(true)}/> :

    <div className="App">
      <Header toggleSidebar={toggleSidebar} toggleReminders={toggleReminders}/>
      <main className="main-content">
      <div className="container-fluid">
        <div className='row mb-3'>
          <div className='col-6'>
            <div className="left-box">
            <h2>Sets</h2>
              <div className="content">
                <SetCardBox sets={sets} loadSetView={loadSetView} addSetPopup={() => addSetPopup(true)} />
              </div>
    

            </div>
           </div>
           <div className='col-6'>
             <div className='container-fluid'>
               <div className='row right-row mb-4 h-50'>
                 <div className='col'>
                  <div className="right-box-top">
                    <h2>Mixes</h2>
                    <div className="content">
                      <MixCardBox mixes={mixes} addMixPopup={() => addMixPopup(true)}/>
                    </div>
                  </div>
                 </div>
               </div>
               <div className='row right-row h-50'>
                <div className='col'>
                   <div className="right-box-bottom">
                      <h2>Audio Files</h2>
                      <div className="content">
                        <AudioFileCardBox audios={audios} addAudioPopup={() => addAudioPopup(true)} editAudio={editAudio} />
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
          
          
          
            </div>
          </div>

      </main>
    </div>
  }
  </>
  );
}

export default App;
