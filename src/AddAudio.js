import { useRef } from 'react'
import './AddAudio.scss'

function AddAudio({closeAddAudio}) {

	const inputFile = useRef(null)

	const onFileUpload = () => {
		// `current` points to the mounted file input element
		inputFile.current.click();
	};

	return (
		<>
		<div className='addaudio-modal'>
			<div className="container">
				<div
					className='row'
					key={"addAudio"}
				>
					<div className='col-11 title'>Upload Audio</div>

					{/* this should also probably be an icon */}
					<div
						className='col-1 white'
						onClick={() => closeAddAudio()}
					>
						X
					</div>
				</div>

				<br/>

				<div className='row'>
					<div className='col-2 label'>Link</div>
					<div className='col-9'>
						<input>
						
						</input>
					</div>
				</div>

				<div className='row'>
					<div className='col-1'></div>
					<div className='col-11 label-bold'>OR</div>
				</div>

				<div className='row'>
					<div className='col'>
						{/* https://stackoverflow.com/questions/37457128/react-open-file-browser-on-click-a-div */}
						{/* https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#Using_hidden_file_input_elements_using_the_click()_method */}
						<button onClick={onFileUpload}>Browse</button>
						<input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default AddAudio;