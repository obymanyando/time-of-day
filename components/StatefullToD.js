import React from 'react'
import morningImg from '../assets/images/sun_rise.png'
import afternoonImg from '../assets/images/afternoon.jpg'

const name = 'Oby'
const date = new Date()
const hour = date.getHours()
// const morning = morningImg

let sunRise = {
	backgroundImage: `url(${morningImg})`,
	height: '100vh',
	backgroundPosition: 'center',
}

class TimeOfDay extends React.Component {
	state = {
		name: name,
		date: date,
		hour: hour,
		morningImg: morningImg,
		afternoonImg: afternoonImg,
	}

	// checkTime = () => {
	// 	if (this.hour < 12) {
	// 		this.setState({ morningImg })
	// 	} else {
	// 		this.setState({ afternoonImg })
	// 	}
	// }

	render() {
		return (
			<div className='timeOfDay' style={sunRise}>
				<h2>{this.state.date.toLocaleDateString()}.</h2> <br />
				{/* <img className='morningImg' src={this.state.morningImg} alt='time' /> */}
				<h1>Hello {this.state.name}, it is: </h1> <br />
				<h2> {this.state.date.toLocaleTimeString(12.17)}.</h2>
			</div>
		)
	}
}

export default TimeOfDay
