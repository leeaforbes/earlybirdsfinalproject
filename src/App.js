import { useState } from 'react';
import './App.scss';
import Sidebar from './Sidebar';
import Reminders from './Reminders'
import ReminderAlert from './ReminderAlert'
import AddAudio from './AddAudio'
import AddMix from './AddMix'
import AddSet from './AddSet'

// // https://react-bootstrap.github.io/getting-started/introduction/
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/scss/bootstrap.scss';

function App() {

  const [showSidebar, setShowSidebar] = useState(false)
  const [showReminders, setShowReminders] = useState(false)
  const [showReminderAlert, setShowReminderAlert] = useState(false)
  const [showAddAudio, setShowAddAudio] = useState(false)
  const [showAddMix, setShowAddMix] = useState(false)
  const [showAddSet, setShowAddSet] = useState(false)

  function closeReminderAlert(){
    setShowReminderAlert(false)
  }

  function closeAddAudio(){
    setShowAddAudio(false)
  }

  function closeAddMix(){
    setShowAddMix(false)
  }

  function closeAddSet(){
    setShowAddSet(false)
  }

  return (
    <div>
      {/* <div className="border bootstrap-center">
        Early Birds Final Project
      </div> */}

      <div className='bootstrap-center'>
        <button
          onClick={() => loadReminders(showReminders, setShowReminders)}
          >
          reminders
        </button>
        
        <button
          onClick={() => loadReminderAlert(showReminderAlert, setShowReminderAlert)}
          >
          reminder alert
        </button>

        <button
          onClick={() => loadSidebar(showSidebar, setShowSidebar)}
          >
          sidebar
        </button>
        
        <button
          onClick={() => loadAddAudio(showAddAudio, setShowAddAudio)}
          >
          add audio
        </button>
        
        <button
          onClick={() => loadAddMix(showAddMix, setShowAddMix)}
          >
          add mix
        </button>
        
        <button
          onClick={() => loadAddSet(showAddSet, setShowAddSet)}
          >
          add set
        </button>

      </div>

      { showSidebar ? <Sidebar /> : null}
      { showReminders ? <Reminders /> : null}
      { showReminderAlert ? <ReminderAlert time={"7:00pm 02/25"} title={"Perform Bumpin Set"} closeReminderAlert={closeReminderAlert}/> : null}
      { showAddAudio ? <AddAudio closeAddAudio={closeAddAudio} /> : null}
      { showAddMix ? <AddMix closeAddMix={closeAddMix} /> : null}
      { showAddSet ? <AddSet closeAddSet={closeAddSet} /> : null}
    </div>
  );
}

function loadSidebar(showSidebar, setShowSidebar) {
  setShowSidebar(!showSidebar)
}

function loadReminders(showReminders, setShowReminders) {
  setShowReminders(!showReminders)
}

function loadReminderAlert(showReminderAlert, setShowReminderAlert) {
  setShowReminderAlert(!showReminderAlert)
}

function loadAddAudio(showAddAudio, setShowAddAudio) {
  setShowAddAudio(!showAddAudio)
}

function loadAddMix(showAddMix, setShowAddMix) {
  setShowAddMix(!showAddMix)
}

function loadAddSet(showAddSet, setShowAddSet) {
  setShowAddSet(!showAddSet)
}

export default App;
