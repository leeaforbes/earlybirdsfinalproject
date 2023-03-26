import { useState } from 'react';
import './Reminders.scss'

const Reminders = () => {

	const [reminderList, setReminderList] = useState([
		{title: "Edit Mix 2 in Bumpin Set", time: "12:00pm 03/25"},
		{title: "Create Mix 3 in Trumpet Set", time: "1:30am 04/01"}
	])

	return (
		<div className='reminders-modal px-2'>
			<div class="container">
				<div class="row">
					<div className="col-11 title">Reminders</div>

					{/* this should probably be a picture */}
					<div className="col-1 title justify-content-right">+</div>
				</div>

				<ReminderList list={reminderList} />
			</div>
		</div>
	)
}

function ReminderList({list}) {
	var outputList = []
  list.forEach(reminder => {
			outputList.push(
				<div className='row'>
					<div className='col-8 border'>{reminder.title}</div>

					{/* trashcan logo inside this div */}
					<div className='col-1 border'>T</div>

					<div className='col-3 border'>{reminder.time}</div>
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