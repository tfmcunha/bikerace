import React, { Component } from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import './clock.css';


class Clock extends Component {

	constructor(props) {
		super(props);
		this.state = {			
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			deadline: "4 1, 2020",			
		}		
	}	  	

	getTimeUntil(dl) {
		const time = Date.parse(dl) - Date.parse(new Date());		
		const days = Math.floor(time/(1000*60*60*24));
		const hours = Math.floor(time/(1000*60*60)%24);
		const minutes = Math.floor(time/1000/60)%60;
		const seconds = Math.floor(time/1000)%60;
		this.setState({days, hours, minutes, seconds});
	}


	componentWillMount() {
		this.getTimeUntil(this.state.deadline);
	}

	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
	}

  	render() {
	    return (
	    	
		    		<Jumbotron className="text-center sidebar">
			    		<h2>STARTS IN</h2>
			    		<Row>
			    			<Col xs={3} md={12}>
					    		<div className="clock_fields">
					    			<div>{this.state.days}</div>
					    			<div>days</div>
					    		</div>
					    	</Col>

					    	<Col xs={3} md={12}>
					    		<div className="clock_fields">
					    			<div>{this.state.hours}</div>
					    			<div>hours</div>
					    		</div>
					    	</Col>

					    	<Col xs={3} md={12}>
					    		<div className="clock_fields">
					    			<div>{this.state.minutes}</div>
					    			<div>minutes</div>
					    		</div>
					    	</Col>

				    		<Col xs={3} md={12}>
					    		<div className="clock_fields">
					    			<div>{this.state.seconds}</div>
					    			<div>seconds</div>
					    		</div>
					    	</Col>
				    	</Row>
			    	</Jumbotron>	
		      	
	   	);
	}
}

export default Clock;
