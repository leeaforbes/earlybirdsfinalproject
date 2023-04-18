import React, { useRef, useState } from 'react';
import './SetCard.scss';
import { ReactComponent as Arrow } from './data/images/chevron-right.svg';
import SetMenu from './SetMenu';
import sets from './data/sets';

const SetCard = ({ set, loadSetView, editSet, deleteSet, selectedSet , addMixToSet, setSets}) => {
  const { id, title, image, date} = set;

  const [setEditMode, setSetEditMode] = useState(false)

  const editFields = {
		titleField: useRef(null),
		dateField: useRef(null),
		tagsField: useRef(null)
	}
  
  let style = {};
  if (set.id === selectedSet) {
    style = {boxShadow: "0 0 7px 3px white"};
  }

  function handleDrop(e) {
    e.preventDefault();
    const mixId = parseInt(e.dataTransfer.getData('mixId'), 10);

    const setIndex = sets.findIndex(set2 => set2.id === set.id);
  
    console.log("index %d", setIndex);
    // Make a copy of the set with the new audio file id added
    const updatedset = {
      ...sets[setIndex],
      mixIds: [...sets[setIndex].mixIds, mixId]
    };

    

    console.log("adding mix %d to set %d", mixId, set.id);
    console.log(updatedset.mixIds);
    console.log("updated set: %o", updatedset);
    // Create a new array with the updated set
    const updatedsets = [
      ...sets.slice(0, setIndex),
      updatedset,
      ...sets.slice(setIndex + 1)
    ];
    console.log(updatedsets);
    
    setSets(updatedsets);
    }

    function handleDragOver(e) {
      e.preventDefault();
      }

  return (
      <div className='set-card' 
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={style}
      >
        <div className='row' >
          <div
            className='col-3'
            onClick={() => loadSetView(id)}
          >
              <div className="set-card__image">
              <img src={image} alt={title} />
            </div>

          </div>
          <div
            className='col-7'
            onClick={() => loadSetView(id)}
          >
            <div className="set-card__details">
              { setEditMode ? 
                <>
                  <input ref={editFields.titleField} type='text' defaultValue={title} />
                  <input ref={editFields.dateField} type='text' defaultValue={date} />
                  <input ref={editFields.tagsField} type='text' defaultValue={set.tags.join(', ')} />
                  <button
                    onClick={() => editSet({
                      id: id,
                      title: editFields.titleField.current.value,
                      image: set.image,
                      date: editFields.dateField.current.value,
                      tags: (editFields.tagsField.current.value).split(','),
                      mixes: set.mixes
                    })}
                  >Done</button>
                </>
              : <>
                  <h3 className="set-card__title">{title}</h3>
                  <p className="set-card__date">{date}</p>
                  <div className="set-card__tags"> 
                    {set.tags.join(', ')}
                  </div>
                  <div className='set-card__numSets'>{set.mixIds.length} mixes</div>
                </>
              }
            </div>
          </div>
          <div className='col-2'>
            <div className='container'>
              <div className='row'>
                <div className='set-menu px-4'>
                  <SetMenu setSetEditMode={setSetEditMode} deleteSet={() => deleteSet(id)} />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
  );
};

export default SetCard;
