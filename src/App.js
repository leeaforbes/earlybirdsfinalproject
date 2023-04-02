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
import { ReactComponent as FileIcon } from "./file_icon.svg";
import { ReactComponent as EditIcon } from "./pencil-square.svg";
import { ReactComponent as PlayIcon } from "./play-square.svg";
import audioFileIcon from './audiofile.png';
import wave from './wave.png';
import pause from './pause.png';
import trash from './trash.png';
import upload from './upload.png';
import backImage from './back.png';


function App() {

  var result = sets.find(item => item.id === 1);

  return (
    
    
    <div className="App">
      <Header />
      <div className="setInfo">
        <div className='container-fluid m-0 p-0'>

      
          <div className='row' >
            <div className='col-1'>
            <div className='row-1' >
              <img src={backImage} alt='back' />
            </div>
            </div>
            <div className='col-3'>
              <img src={result.image} alt={result.title} />
            </div>
            
            <div className='col-8 align-self-end'>
              <h4>Set</h4>
              <h4> {result.title} </h4>
              <h4> {result.date}</h4>
              <h5> modified 10/22 </h5>
              <h5>{result.tags.join(', ')}</h5>
              <h5> 4 mixes, 10 audio files</h5>
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
          <div className='row' >
          </div>
        {/* <div className='row'>
          <div className='col'>
            <div className='audio-file-card'>
              <div className='container'>
                <div className='row'>
                  <div className='col-2 p-0'>
                    <img src={audioFileIcon} alt='add from'/>
                  </div>
                  <div className='col-8'>
                    <div className='border row'>
                      <div className='border col'>
                        <div className="audio-file-card__title"> title </div> 
                      </div>
                      <div className='border col-1 p-0'>
                        <img src={trash} alt='trash'/>
                      </div>
                      <div className='border col-1 p-0'>
                        <img src={upload} alt='upload'/>
                      </div>
                    </div>
                    <div className='row'>
                      <div className="audio-file-card__artist"> artist </div>
                    </div>
                    <div className='row'>
                      <div className="audio-file-card__genres"> genre </div>
                    </div>
                    <div className='row'>
                      <div className="audio-file-card__length"> length </div>
                    </div>
      
                  </div>

                  <div className='col-1'>
                    <div className='flex-container h-100'>
                      <div className='row h-50'>
                        <div className='col h-100'>
                          <EditIcon style={{ width: '100%', height: '100%' }}/>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
          <div className='col'>
            <div className='audio-file-card'>
              <div className='container'>
                <div className='row'>
                  <div className='col-2 p-0'>
                  <img src={audioFileIcon} alt='add from'/>
                  </div>
                  <div className='col-2'>
                    <div className="audio-file-card__title"> title </div>
                    <div className="audio-file-card__artist"> artist </div>
                    <div className="audio-file-card__genres"> genre </div>
                    <div className="audio-file-card__length"> length </div>
                  </div>
                
                  <div className='col-7'>
                    <div className='row-6'>
                      <img src={wave} alt='wave'/>
                    </div>
                    <div className='row-1'>
                  
                      <div className='col-1 mx-auto'>
                        <img src={pause} alt='pause'/>
                    
                    </div> 
                  </div>
                </div>
                  <div className='col-1'>
                    <div className='flex-container h-100'>
                      <div className='row h-50'>
                        <div className='col h-100'>
                        </div>
                      </div>
                      <div className='row h-50'>
                        <div className='col h-100'>
                        <PlayIcon style={{ width: '100%', height: '100%' }}/>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
              </div>
            
            </div>
          </div>
        </div> */}
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
