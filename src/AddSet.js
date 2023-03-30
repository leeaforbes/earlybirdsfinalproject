import { useRef, useState } from 'react';
import './AddMix.scss'

function AddSet({closeAddSet}) {

	const [addedMixList, setAddedMixList] = useState([])
	const [mixList] = useState(["Rhiannon x FEELWITCHU", "Fever - Peggy Lee House Remix", "Krusty Crab Pizza x Romanticist", "god i love edm", "red hot bars", "soul-ripping riffs"])

	function onClickAvailableMix(mix){
		setAddedMixList([...addedMixList, mix])
	}

	function onClickAddedMix(mix){
		setAddedMixList(addedMixList.filter(m => m !== mix))
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
					key={"addMix"}
				>
					<div className='col-11 title'>New Set</div>

					{/* this should also probably be an icon */}
					<div
						className='col-1 white'
						onClick={() => closeAddSet()}
					>
						X
					</div>
				</div>

				<br/>

				<AddedMixList addedMixList={addedMixList} onClickAddedMix={onClickAddedMix}/>
				<div className='createbutton'>
					{/* this needs to do something */}
					<button>Create</button>
				</div>
				
				<br/>

				<div className='row'>
					<div className='col label'>+ Click Mix to Add/Remove!</div>
				</div>

				<input
					id='searchbar'
					ref={searchFieldRef}
					type='text'
					placeholder='Search'
					onChange={searchOnChange}
				>
				</input>
				<MixList mixList={mixList} addedMixList={addedMixList} searchTerm={searchTerm} onClickAvailableMix={onClickAvailableMix}/>
			</div>
		</div>
		</>
	)
}

function AddedMixList({addedMixList, onClickAddedMix}){
	var outputList = []
	addedMixList.forEach(elementName => {
		outputList.push(
			<div
				className=""
				key={elementName + "added"}
				onClick={() => onClickAddedMix(elementName)}
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

function MixList({mixList, addedMixList, searchTerm, onClickAvailableMix}){
	var outputList = []
	mixList.forEach(elementName => {
		if(elementName.toLowerCase().startsWith(searchTerm) && !addedMixList.includes(elementName)){
			outputList.push(
				<div
					className=""
					key={elementName}
					onClick={() => onClickAvailableMix(elementName)}
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

export default AddSet;