import { useState } from 'react';
import './App.scss';
import Sidebar from './Sidebar';
import Reminders from './Reminders'

// // https://react-bootstrap.github.io/getting-started/introduction/
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/scss/bootstrap.scss';

function App() {

  const [showSidebar, setShowSidebar] = useState(false)
  const [showReminders, setShowReminders] = useState(false)

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
          onClick={() => loadSidebar(showSidebar, setShowSidebar)}
          >
          sidebar
        </button>
      </div>

      { showSidebar ? <Sidebar /> : null}
      { showReminders ? <Reminders /> : null}
    </div>
  );
}

function loadSidebar(showSidebar, setShowSidebar) {
  setShowSidebar(!showSidebar)
}

function loadReminders(showReminders, setShowReminders) {
  setShowReminders(!showReminders)
}

export default App;
