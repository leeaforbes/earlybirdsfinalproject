import './ReminderAlert.scss'

function ReminderAlert({time, title, closeReminderAlert}) {

	return (
		<>
		<div className='reminderalert-modal'>
			<div className="container">
				<div
					className='row'
					key={"reminderalert"}
					>

					{/* Bell icon here */}
					<div className='col-1'>B</div>
					<div className='col-10 timetext'>{time}</div>

					{/* this should also probably be an icon */}
					<div
						className='col-1 timetext'
						onClick={() => closeReminderAlert()}
					>
						X
					</div>
				</div>
				<div className='row'>
					{/* intentionally left empty to take up space */}
					<div className='col-1'></div>
					<div className='col-11 titletext'>{title}</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default ReminderAlert;