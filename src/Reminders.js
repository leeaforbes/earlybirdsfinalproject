import { useRef, useState } from 'react';
import './Reminders.scss'

const Reminders = () => {

	const [reminderList, setReminderList] = useState([
		{title: "Edit Mix 2 in Bumpin Set", time: "12:00pm 03/25"},
		{title: "Create Mix 3 in Trumpet Set", time: "1:30am 04/01"}
	])

	const [addEnabled, setAddEnabled] = useState(true)
	const titleRef = useRef(null)
	const timeRef = useRef(null)

	return (
		<div className='reminders-modal'>
			<div className="container">
				<div className="row">
					<div className="col-11 title">Reminders</div>

					{/* this should probably be a picture */}
					<div
						className="col-1 title justify-content-right"
						onClick={() => {
							if(addEnabled){
								setAddEnabled(false)
							}
						}}
					>
						+
					</div>
				</div>

				<ReminderList list={reminderList} />

				<br/>

				{/* i tried to put this in its own component but
						none of the functions in onclick worked */}
				{ !addEnabled ? 				
					<div
						className='row'
						key={"new reminder"}
					>
						<div className='col-12'>
							<input
								ref={titleRef}
								type='text'
								placeholder='Title'
								></input>
						</div>

						<div className='col-12'>
							<input
								ref={timeRef}
								type='text'
								placeholder='Time'
								></input>
						</div>

						<div className='col-12'>
							<button
								onClick={() => {
									setAddEnabled(true)
									setReminderList([...reminderList, {title: titleRef.current.value, time: timeRef.current.value}])
								}}
								>
									Add
							</button>
							<button
								onClick={() => {
									setAddEnabled(true)
								}}
								>
									Cancel
							</button>
						</div>
					</div>
					: null
				}
			</div>
		</div>
	)
}

function ReminderList({list}) {

	// SORT REMINDERS HERE??

	var outputList = []
  list.forEach(reminder => {
			outputList.push(
				<div
					className='row'
					key={reminder.title}
				>
					<div className='col-8 border white'>{reminder.title}</div>

					{/* trashcan logo inside this div */}
					<div className='col-1 border white'>T</div>

					<div className='col-3 border white'>{reminder.time}</div>
			</div>
		)
  });

  return (
    <>
			{outputList}
    </>
  );
}

export default Reminders;