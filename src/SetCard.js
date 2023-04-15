import React, { useRef, useState } from 'react';
import './SetCard.scss';
import SetMenu from './SetMenu';

const SetCard = ({ set, loadSetView, editSet, deleteSet }) => {
  const { id, title, image, date} = set;

  const [setEditMode, setSetEditMode] = useState(false)

	const editFields = {
		titleField: useRef(null),
		dateField: useRef(null),
		tagsField: useRef(null)
	}

  return (
      <div className='set-card'>
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
            // onClick={() => loadSetView(id)}
          >
            <div className="set-card__details">
              { setEditMode ? 
                <>
                  <input ref={editFields.titleField} type='text' defaultValue={title} />
                  <input ref={editFields.dateField} type='text' defaultValue={date} />
                  <input ref={editFields.tagsField} type='text' defaultValue={set.tags.join(', ')} />
                  <button
                    onClick={() => {
                      editSet({
                        id: id,
                        title: editFields.titleField.current.value,
                        image: set.image,
                        date: editFields.dateField.current.value,
                        tags: (editFields.tagsField.current.value).split(','),
                        mixes: set.mixes
                      })
                      setSetEditMode(false)
                    }}
                  >Done</button>
                </>
              : <>
                  <h3 className="set-card__title">{title}</h3>
                  <p className="set-card__date">{date}</p>
                  <div className="set-card__tags"> 
                    {set.tags.join(', ')}
                  </div>
                </>
              }
            </div>
          </div>
          <div className='col-2 set-menu px-4'>
            <SetMenu setSetEditMode={setSetEditMode} deleteSet={() => deleteSet(id)} />
          </div>
        </div>
      </div>
  );
};

export default SetCard;
