import React from 'react';
import Header from './header';
import mixes from './data/mixes.js';
import sets from './data/sets.js';
import detailedSet from './data/detailedSet.js'
import './App.scss';
import MixCardBox from './MixCardBox';
import SetCardBox from './SetCardBox';
import { ReactComponent as DownloadIcon } from './downloadIcon.svg';
import { ReactComponent as addFromIcon } from './addfromIcon.svg';
import addImage from './addFrom.png';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="border setInfo">
        <div className='border container-fluid m-0 p-0'>

      
          <div className='row' >
            <div className='col-3'>
              <img src={detailedSet.image} alt={detailedSet.title} />
            </div>
            
            <div className='col-8 align-self-end'>
              <div>Set</div>
              <h3> {detailedSet.title} </h3>
              <h3> {detailedSet.date}</h3>
              <div> modified 10/22 </div>
              <div>{detailedSet.tags.join(', ')}</div>
              <div> 4 mixes, 10 audio files</div>
            </div>
          </div>
          <div className='greybg'>
            <div className='row' >
              <div className='col-1 headerIcon'>
                <DownloadIcon />

          
              </div>
              <div className='col-2 p-1'>
                <img src={addImage} alt='add from'>
              
                </img>
              </div>
      

            
            </div>
          <div className='row' >
            <div className='row' >
              <div className='col'>

                <div className="content">
                  <MixCardBox mixes={mixes}/>
                </div>
              
              </div>

            </div>

          </div>
          </div>
        
        </div>

            

        
    </div>
    

      {/* <div className="main-content">
        <div className="container">
               <div className='row'>
               <div className="setTitle">
                <h1>Title</h1>
        
              </div>
                  </div>
               <div className='row'>
               <div className="right-box-top">
                    <div className="content">
                      
                      <MixCardBox mixes={mixes} />
                    </div>
                    </div>
              </div>
            </div>
          
          

      </div> */}
    </div>
  );
}

export default App;
