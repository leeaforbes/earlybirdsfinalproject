import React, { useRef, useState } from 'react';
import './mixCard.scss';
// import audios from './data/audios';
import MixMenu from './MixMenu';


const MixCard = ({ mix, loadMixView, editMix, deleteMix }) => {
  // const [showMixInfo, setShowMixInfo] = useState(false);
  // const filteredObjects = audios.filter(obj => mix.audioFileIds.includes(obj.id));

  // function handleDropdownClick() {
  //   setShowMixInfo(!showMixInfo);
  //   console.log('showInfo: ' + showMixInfo);
  // }

  const [mixEditMode, setMixEditMode] = useState(false)
  const titleField = useRef(null)

  return (
    <div className="mix-card">
      <div className='container-fluid'>
        <div className='row'>
          <div
            className='col-10'
            onClick={() => {
              if(!mixEditMode){
                loadMixView(mix.id)
              }
            }}
          >
            <div className="mix-card__title">
              { mixEditMode ?
                <>
                  <input ref={titleField} type='text' defaultValue={mix.title} />
                  <button
                    onClick={() => {
                      editMix({
                        id: mix.id,
                        title: titleField.current.value,
                        audioFileIds: mix.audioFileIds
                        })
                      setMixEditMode(false)
                    }}
                  >Done</button>
                </>
                : <>{mix.title}</>
              }
            </div>
          </div>
          <div className='col-2 set-menu px-4'>
            <MixMenu setMixEditMode={setMixEditMode} deleteMix={() => deleteMix(mix.id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixCard;
