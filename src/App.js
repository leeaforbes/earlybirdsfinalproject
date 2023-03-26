import { useState } from 'react';
import './App.scss';
import Sidebar from './Sidebar';

// https://react-bootstrap.github.io/getting-started/introduction/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss';

function App() {

  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div>
      <div className="border bootstrap-center">
        Early Birds Final Project
      </div>

      <button
        onClick={() => loadSidebar(setShowSidebar)}
      >
        sidebar
      </button>

      { showSidebar ? <Sidebar /> : null}
    </div>
  );
}

function loadSidebar(setShowSidebar) {
  console.log("load sidebar")
  setShowSidebar(true)
}

export default App;
