import { useRef, useState } from 'react';
import './AddSet.scss'

function AddSet({addSetPopup}) {

	const setNameFieldRef = useRef(null)
	const tagsFieldRef = useRef(null)

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

	/* https://stackoverflow.com/questions/37457128/react-open-file-browser-on-click-a-div */
	/* https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#Using_hidden_file_input_elements_using_the_click()_method */
	const inputFile = useRef(null)

	// SHE WILL CREATE A TUTORIAL FOR THE FILE UPLOAD!
	const onImageFileUpload = () => {
		// `current` points to the mounted file input element
		inputFile.current.click();

		// console.log(inputFile.name)
		// console.log(inputFile.current)
	};

	return (
		<>
		<div className='addset-modal'>
			<div className="container">
				<div
					className='row'
					key={"addMix"}
				>
					<div className='col-11 title'>New Set</div>

					{/* this should also probably be an icon */}
					<div
						className='col-1 white'
						onClick={addSetPopup}
					>
						X
					</div>
				</div>

				<br/>

				
				<div className='row px-2'>
					<div
						className='col-6 set-image'
						onClick={onImageFileUpload}
						>
						<div className='bootstrap-center test'>click to add image</div>
					</div>
					<input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>


					<div className='col-6'>
						<div>
							<input
								className='set-field'
								ref={setNameFieldRef}
								type='text'
								placeholder='Set Name'
								>
							</input>
						</div>

						<div className='py-1'>
							<input
								className='set-field'
								ref={tagsFieldRef}
								type='text'
								placeholder='tags (comma separated list)'
								>
							</input>
						</div>
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
					id='mixsearch'
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