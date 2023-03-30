import { useRef, useState } from 'react';
import './AddMix.scss'

function AddMix({closeAddMix}) {

	const [addedAudioList, setAddedAudioList] = useState([])
	const [audioList] = useState(["rhiannon.mp4", "feelwu.mp4", "drumzzz.mp4", "krabpizza.mp4", "untitled4.mp4", "rhiannon2.mp4"])

	function onClickAvailableAudio(audio){
		setAddedAudioList([...addedAudioList, audio])
	}

	function onClickAddedAudio(audio){
		setAddedAudioList(addedAudioList.filter(a => a !== audio))
	}

	const searchFieldRef = useRef(null)
	const [searchTerm, setSearchTerm] = useState("")

	function searchOnChange(){
		setSearchTerm(searchFieldRef.current.value)
	}

	return (
		<>
		<div className='addmix-modal'>
			<div className="container">
				<div
					className='row'
					key={"addAudio"}
				>
					<div className='col-11 title'>New Mix</div>

					{/* this should also probably be an icon */}
					<div
						className='col-1 white'
						onClick={() => closeAddMix()}
					>
						X
					</div>
				</div>

				<br/>

				<AddedAudioList addedAudioList={addedAudioList} onClickAddedAudio={onClickAddedAudio}/>
				<div className='createbutton'>
					{/* this needs to do something */}
					<button>Create</button>
				</div>
				
				<br/>

				<div className='row'>
					<div className='col label'>+ Click Audio to Add/Remove!</div>
				</div>

				<input
					id='searchbar'
					ref={searchFieldRef}
					type='text'
					placeholder='Search'
					onChange={searchOnChange}
				>
				</input>
				<AudioList audioList={audioList} addedAudioList={addedAudioList} searchTerm={searchTerm} onClickAvailableAudio={onClickAvailableAudio}/>
			</div>
		</div>
		</>
	)
}

function AddedAudioList({addedAudioList, onClickAddedAudio}){
	var outputList = []
	addedAudioList.forEach(elementName => {
		outputList.push(
			<div
				className=""
				key={elementName + "added"}
				onClick={() => onClickAddedAudio(elementName)}
			>
				{elementName}
			</div>
		)
	});

	return(
		<div className='border px-2'>
			{outputList}
		</div>
	)
}

function AudioList({audioList, addedAudioList, searchTerm, onClickAvailableAudio}){
	var outputList = []
	audioList.forEach(elementName => {
		if(elementName.toLowerCase().startsWith(searchTerm) && !addedAudioList.includes(elementName)){
			outputList.push(
				<div
					className=""
					key={elementName}
					onClick={() => onClickAvailableAudio(elementName)}
				>
					{"┗ " + elementName}
				</div>
			)
		}
	});

	return(
		<>
			{outputList}
		</>
	)
}

export default AddMix;