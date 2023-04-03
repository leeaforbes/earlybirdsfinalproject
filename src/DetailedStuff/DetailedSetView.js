import React from 'react';
import Header from '../header';
import mixes from '../data/mixes.js';
import sets from '../data/sets.js';
import './DetailedSetView.scss';
import DetailedMixCardBox from './DetailedMixCardBox';
import { ReactComponent as DownloadIcon } from '../data/images/downloadIcon.svg';
import addImage from '../data/images/addFrom.png';
import backImage from '../data/images/back.png';


function DetailedSetView({id, backButtonOnClick, toggleSidebar, toggleReminders, addMixPopup}) {

  var result = sets.find(item => item.id === id);

  return (
    
    
    <div className="App">
      <Header toggleSidebar={toggleSidebar} toggleReminders={toggleReminders}/>
      <div className="setInfo">
        <div className='container-fluid m-0 p-0'>

      
          <div className='row' >
            <div className='col-1'>
            <div className='row-1' >
              <img
                src={backImage} alt='back'
                style={{ width: '45px', height: '45px' }}
                onClick={backButtonOnClick}
              />
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
            <div className='border-bottom row' >
              <div className='col-1 headerIcon'>
                <DownloadIcon />

          
              </div>
              <div className='col-2 p-2'>
                <img src={addImage} alt='add from' style={{ width: '220px', height: '60px' }}>
              
                </img>
              </div>
      

            
            </div>
          <div className='row m-1' >
            <div className='row' >
              <div className='col'>

                <div className="content">
                  <DetailedMixCardBox mixes={mixes} addMixPopup={addMixPopup}/>
                </div>
              
              </div>

            </div>

          </div>
          <div className='row' >
          </div>

      </div>
        
    </div>

            

        
    </div>
    </div>
  );
}

export default DetailedSetView;
