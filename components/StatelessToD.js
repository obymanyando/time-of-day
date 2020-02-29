import React from 'react'
import DateFormat from './DateFormat'
import morning from '../assets/images/sun_rise.png'
import afternoon from '../assets/images/afternoon.jpg'
import evening from '../assets/images/sunset.jpg'

const name = 'Oby'
const date = new Date()
const hour = date.getHours()

//greetings
const goodMorning = `Good Morning ${name}`

// const sunRise = {
// 	backgroundImage: `url(${morning})`,
// 	height: '100vh',
// 	backgroundPosition: 'center',
// }

class TimeOfDayNoState extends React.Component {
	time() {
		let setImage
		if (hour >= 5 && hour < 12) {
			setImage = morning
		} else if (hour >= 12 && hour <= 17) {
			setImage = afternoon
		} else {
			setImage = evening
		}
		return setImage
	}

	greeting() {
		let setGreeting
		if (hour > 1 && hour < 12) {
			setGreeting = goodMorning
		} else if (hour >= 12 && hour <= 17) {
			setGreeting = `Good Afternoon ${name}`
		} else {
			setGreeting = `Good Evening ${name}`
		}
		return setGreeting
	}

	render() {
		return (
			<div className='timeOfDay'>
				<img src={this.time()} alt='time' />

				<div className='info'>
					<DateFormat />
					<h1 className='greetingText'>{this.greeting()}</h1>
				</div>
			</div>
		)
	}
}

export default TimeOfDayNoState
