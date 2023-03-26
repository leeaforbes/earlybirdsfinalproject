import { useRef, useState } from 'react';
import "./Sidebar.scss"

const Sidebar = () => {
	const searchFieldRef = useRef(null)
	const [setList] = useState(["Dan's Bday", "Claudia's Baby Shower", "EMO NITE", "Festival of Lights"])
	const [mixList] = useState(["Rhiannon x FEELWITCHU", "Fever - Peggy Lee House Remix", "Krusty Crab Pizza x Romanticist", "god i love edm", "red hot bars", "soul-ripping riffs"])
	const [audioList] = useState(["rhiannon.mp4", "feelwu.mp4", "drumzzz.mp4", "krabpizza.mp4", "untitled4.mp4", "rhiannon2.mp4"])

	return (
		<div className='sidebar-modal'>

			<div id='directorytitle'>Directory</div>

			<input
				id='searchbar'
				ref={searchFieldRef}
				type='text'
				placeholder='Search'
			>
			</input>

			

			<CreateList listName={"Sets"} list={setList} onClickFunction={() => {console.log("s")}} />
			<br/>
			<CreateList listName={"Mixes"} list={mixList} onClickFunction={() => {console.log("m")}} />
			<br/>
			<CreateList listName={"Audios"} list={audioList} onClickFunction={() => {console.log("a")}} />
		</div>
	)
};

function CreateList({listName, list, onClickFunction}) {

	const [showList, setShowList] = useState(true)

	function collapseList() {

	}

	var outputList = []
  list.forEach(elementName => {
    outputList.push(
      <div
        className=""
        key={elementName}
      >
				{"┗ " + elementName}
      </div>
    )
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