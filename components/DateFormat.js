import React from 'react'
import Clock from './Clock'

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

let d = new Date()
let year = d.getFullYear()
let date = d.getDate()

let monthName = months[d.getMonth()]
//let dayName = days[d.getDay()]

const DateFormat = months => {
	return (
		<div className='dateFormat'>
			<h1>
				{monthName} {date}, {year}
				<Clock />
			</h1>
		</div>
	)
}

export default DateFormat
