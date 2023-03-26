import './App.scss';
import Sidebar from './Sidebar';

// https://react-bootstrap.github.io/getting-started/introduction/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss';

function App() {
  return (
    <div>
      <div className="border bootstrap-center">
        Early Birds Final Project
      </div>

      <button
        onClick={() => loadSidebar()}
      >
        sidebar
      </button>

      <Sidebar></Sidebar>
    </div>
  );
}

function loadSidebar() {
  console.log("load sidebar")
}

export default App;
