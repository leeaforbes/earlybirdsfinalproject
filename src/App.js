import { useState } from 'react';
import React from 'react';
import Header from './header';
import  AudioFileCardBox from './AudioFileCardBox.js';
import audios from './data/audios.js';
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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref,uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBywWphbldxSOwgw6Go7xUIjhJ8HT7faOs",
  authDomain: "ebhci-2c579.firebaseapp.com",
  databaseURL: "https://ebhci-2c579-default-rtdb.firebaseio.com",
  projectId: "ebhci-2c579",
  storageBucket: "ebhci-2c579.appspot.com",
  messagingSenderId: "691674110269",
  appId: "1:691674110269:web:01073e4fbf0de906fe8d54",
  measurementId: "G-GNXLLS23SM"
};

// Initialize Firebase




function App() {

  const [setView, setSetView] = useState(-1)

  const [showSidebar, setShowSidebar] = useState(false)
  const [showReminders, setShowReminders] = useState(false)
  // const [showReminderAlert, setShowReminderAlert] = useState(false)
  const [showAddAudio, setShowAddAudio] = useState(false)
  const [showAddMix, setShowAddMix] = useState(false)
  const [showAddSet, setShowAddSet] = useState(false)
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const storage = getStorage(app);
  // const mountainsRef = ref(storage, 'mountain.jpg');
  // const mountainImagesRef = ref(storage, 'Desktop/mountain.jpg');

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
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const storageRef = ref(storage, file.name);
    uploadBytes(storageRef, file);
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
        <input type="file" onChange={handleFileInputChange} />
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
                        <AudioFileCardBox audios={audios} addAudioPopup={() => addAudioPopup(true)}/>
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
