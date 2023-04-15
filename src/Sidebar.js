import { useRef, useState } from 'react';
import "./Sidebar.scss"
import { ReactComponent as SidebarIcon } from './data/images/list.svg';

const Sidebar = ({toggleSidebar, sets, mixes, audios}) => {
	const searchFieldRef = useRef(null)
	const [searchTerm, setSearchTerm] = useState("")
	
	const [setList] = useState(sets)
	const [mixList] = useState(mixes)
	const [audioList] = useState(audios)

	function searchOnChange(){
		setSearchTerm(searchFieldRef.current.value)
	}

	return (
		<div className='sidebar-modal'>

			<SidebarIcon
				style={{ width: '45px', height: '45px', stroke: "#ffffff" }}
				onClick={() => toggleSidebar()}
			/>
			<div className='title'>Directory</div>

			{/* this should also probably be an icon */}
			{/* <div
				onClick={() => {console.log("sidebar X")}}
			>
				X
			</div> */}

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
		if(elementName.title.toLowerCase().startsWith(searchTerm)){
			outputList.push(
				<div
					className=""
					key={elementName.title}
				>
					{"┗ " + elementName.title}
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