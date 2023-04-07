import { useState } from 'react';
import './SetMenu.scss';

const SetMenu = ({ setSetEditMode, deleteSet }) => {

  const [showMenu, setShowMenu] = useState(false)

  return (
      <div className='set-menu'>
        <div className='row'>
            <div
							className='col justify-right'
							onClick={() => {setShowMenu(!showMenu)}}
						>
            ...
            </div>
        </div>
				{ showMenu ? 
					<div className=''>
						<div className='row'>
							<div
								className='col justify-right border mx-2'
								onClick={() => {
									setShowMenu(false)
									setSetEditMode(true)
								}}
							>
								Edit
							</div>
						</div>
						<div className='row'>
							<div
								className='col justify-right border mx-2'
								onClick={deleteSet}
							>
								Delete
							</div>
						</div>
					</div>
				: null }
      </div>
  );
};

export default SetMenu;
