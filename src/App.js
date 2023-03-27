import { useState } from 'react';
import './App.scss';
import Sidebar from './Sidebar';
import Reminders from './Reminders'
import ReminderAlert from './ReminderAlert'

// // https://react-bootstrap.github.io/getting-started/introduction/
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/scss/bootstrap.scss';

function App() {

  const [showSidebar, setShowSidebar] = useState(false)
  const [showReminders, setShowReminders] = useState(false)
  const [showReminderAlert, setShowReminderAlert] = useState(false)

  function closeReminderAlert(){
    setShowReminderAlert(false)
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

      </div>

      { showSidebar ? <Sidebar /> : null}
      { showReminders ? <Reminders /> : null}
      { showReminderAlert ? <ReminderAlert time={"7:00pm 02/25"} title={"Perform Bumpin Set"} closeReminderAlert={closeReminderAlert}/> : null}
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

export default App;
