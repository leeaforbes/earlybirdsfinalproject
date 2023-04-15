import { useState } from 'react';
import React from 'react';
import Header from './header';
import  AudioFileCardBox from './AudioFileCardBox.js';
import audios_raw from './data/audios.js';
import mixes from './data/mixes.js';
import sets_raw from './data/sets.js';
import './App.scss';
import MixCardBox from './MixCardBox';
import SetCardBox from './SetCardBox';

import Sidebar from './Sidebar';
import Reminders from './Reminders'
// import ReminderAlert from './ReminderAlert'
import AddSet from './AddSet'
import AddMix from './AddMix'
import AddAudio from './AddAudio'
import HelpScreen from './HelpScreen';

function App() {

  const [selectedSet, setSelectedSet] = useState(-1);
  const [selectedMix, setSelectedMix] = useState(null);

  const [showSidebar, setShowSidebar] = useState(false)
  const [showReminders, setShowReminders] = useState(false)
  // const [showReminderAlert, setShowReminderAlert] = useState(false)
  const [showAddAudio, setShowAddAudio] = useState(false)
  const [showAddMix, setShowAddMix] = useState(false)
  const [showAddSet, setShowAddSet] = useState(false)
  const [showHelpMenu, setShowHelpMenu] = useState(false)

  const [audios, setAudios] = useState(audios_raw)
  const [sets, setSets] = useState(sets_raw)

  function loadSetView(id) {
    if (selectedSet === id) {
      setSelectedSet(-1);
      console.log("no specified set");
    } else {
      setSelectedSet(id);
      console.log("showing mixes for set: %u", id);
    }
  }

  function loadMixView(id) {
    if (selectedMix === id) {
      setSelectedMix(0);
      console.log("no specified mix");
    } else {
      setSelectedMix(id);
      console.log("showing files for mix: ", id);
    }
  }

  function toggleSidebar() {
    setShowSidebar(!showSidebar)
  }
  
  function toggleReminders(){
    setShowReminders(!showReminders)
  }
  
  function toggleHelp(){
    setShowHelpMenu(!showHelpMenu)
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

  const setSelected = sets.find((set) => set.id === selectedSet);
  const mixSelected = mixes.find((mix) => mix.id === selectedMix);

  const mixesToShow = (selectedSet != -1) ? mixes.filter(obj => setSelected.mixIds.includes(obj.id)) : mixes;
  const audiosToShow = selectedMix ? audios.filter(obj => mixSelected.audioFileIds.includes(obj.id)) : audios;

  // const mixAppend = selectedSet ? setSelected.title : "" ;
  function editAudio(newAudio){
    // console.log("attempting to edit audio", newAudio)

    const audiosCopy = audios.map((a) => {
      if(a.id === newAudio.id){
        return newAudio
      } else {
        return a
      }
    })

    setAudios(audiosCopy)
  }

  function deleteAudio(audioId){
    setAudios(audios.filter(a => a.id !== audioId))
  }

  function editSet(newSet){
    // console.log("attempting to edit set", newSet)
    
    const setsCopy = sets.map((s) => {
      if(s.id === newSet.id){
        return newSet
      } else {
        return s
      }
    })
    
    setSets(setsCopy)
  }
  
  function deleteSet(setId){
    // console.log("attempting to delete set", setId)
    setSets(sets.filter(s => s.id !== setId))
  }

  return (
    <>
    { showSidebar ? <Sidebar toggleSidebar={toggleSidebar} sets={sets} mixes={mixes} audios={audios} /> : null}
    { showReminders ? <Reminders /> : null}
    { showAddSet ? <AddSet addSetPopup={() => addSetPopup(false)} /> : null}
    { showAddMix ? <AddMix addMixPopup={() => addMixPopup(false)} /> : null}
    { showAddAudio ? <AddAudio addAudioPopup={() => addAudioPopup(false)} /> : null}
    { showHelpMenu ? <HelpScreen></HelpScreen> : null}

    <div className="App">
      <Header toggleSidebar={toggleSidebar} toggleReminders={toggleReminders} toggleHelp={toggleHelp} />
      <main className="main-content">
      <div className="container-fluid">
        <div className='row mb-3'>
          <div className='col-6'>
            <div className="left-box">
            <h2>Sets</h2>
              <div className="content">
                <SetCardBox sets={sets} loadSetView={loadSetView} addSetPopup={() => addSetPopup(true)} editSet={editSet} deleteSet={deleteSet} />
              </div>
    

            </div>
           </div>
           <div className='col-6'>
             <div className='container-fluid right-box'>
               <div className='row right-row h-50'>
                 <div className='col h-100 pb-3'>
                  <div className="container-fluid right-box-top p-0">
                    <h2>Mixes { (selectedSet != -1) ? " - " + setSelected.title : null}</h2>
                    <div className="content">
                      <MixCardBox mixes={mixesToShow} loadMixView={loadMixView} addMixPopup={() => addMixPopup(true)}/>
                    </div>
                  </div>
                 </div>
               </div>
               <div className='row right-row h-50'>
                <div className='col h-100'>
                   <div className="container-fluid right-box-bottom">
                      <h2>Audio Files { selectedMix ? " - " + mixSelected.title : null}</h2>
                      <div className="content pb-5">
                        <AudioFileCardBox audios={audiosToShow} addAudioPopup={() => addAudioPopup(true)} editAudio={editAudio} deleteAudio={deleteAudio}/>
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
  </>
  );
}

export default App;
