import { useRef, useState } from 'react';
import "./Sidebar.scss"

const Sidebar = () => {
	const searchFieldRef = useRef(null)
	const [searchTerm, setSearchTerm] = useState("")
	const [setList] = useState(["Dan's Bday", "Claudia's Baby Shower", "EMO NITE", "Festival of Lights"])
	const [mixList] = useState(["Rhiannon x FEELWITCHU", "Fever - Peggy Lee House Remix", "Krusty Crab Pizza x Romanticist", "god i love edm", "red hot bars", "soul-ripping riffs"])
	const [audioList] = useState(["rhiannon.mp4", "feelwu.mp4", "drumzzz.mp4", "krabpizza.mp4", "untitled4.mp4", "rhiannon2.mp4"])

	function searchOnChange(){
		setSearchTerm(searchFieldRef.current.value)
	}

	return (
		<div className='sidebar-modal'>

			<div className='title'>Directory</div>

			<input
				id='searchbar'
				ref={searchFieldRef}
				type='text'
				placeholder='Search'
				onChange={searchOnChange}
			>
			</input>

			<CreateList listName={"Sets"} list={setList} searchTerm={searchTerm} />
			<br/>
			<CreateList listName={"Mixes"} list={mixList} searchTerm={searchTerm} />
			<br/>
			<CreateList listName={"Audios"} list={audioList} searchTerm={searchTerm} />
		</div>
	)
};

function CreateList({listName, list, searchTerm}) {

	const [showList, setShowList] = useState(true)

	var outputList = []
  list.forEach(elementName => {
		if(elementName.toLowerCase().startsWith(searchTerm)){
			outputList.push(
				<div
					className=""
					key={elementName}
				>
					{"┗ " + elementName}
				</div>
			)
		}
  });

  return (
    <>
			{ showList ? 

				<div>
					<div
						className='sectiontitle'
						onClick={() => setShowList(false)}
					>
						{"- " + listName}
					</div>

					<div className='white'>
						{outputList}
					</div>
				</div>

				: <div
						className='sectiontitle'
						onClick={() => setShowList(true)}
					>
						{"+ " + listName}
					</div>
			}
    </>
  );
}

export default Sidebar;