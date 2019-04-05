import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './css/clock.css';


class Clock extends Component {

	constructor(props) {
		super(props);
		this.state = {			
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			deadline: "April 1, 2020",			
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
	    	
		    		<div class="d-flex justify-content-center text-center sidebar mt-5">
		    			<div class="layer p-4">
				    		<h2>{this.state.deadline}</h2>
				    		<Row>
				    			<Col xs={3} md={12} className="px-0">						    		
						    			<CircularProgressbar
									        percentage={(this.state.days*100)/400}
									        text={`${this.state.days}`}
									        counterClockwise
									        className="clock_fields"
									    />						    		
						    	</Col>

						    	<Col xs={3} md={12} className="px-0">						    		
							    		<CircularProgressbar
									        percentage={(this.state.hours*100)/24}
									        text={`${this.state.hours}`}
									        counterClockwise
									        className="clock_fields"
									    />									
						    	</Col>

						    	<Col xs={3} md={12} className="px-0">						    		
							    		<CircularProgressbar
									        percentage={(this.state.minutes*100)/60}
									        text={`${this.state.minutes}`}
									        counterClockwise
									        className="clock_fields"
									    />									
						    	</Col>

					    		<Col xs={3} md={12} className="px-0">					    			
							    		<CircularProgressbar
									        percentage={(this.state.seconds*100)/60}
									        text={this.state.seconds}
									        counterClockwise
									        className="clock_fields"
									    />									
						    	</Col>	
					    	</Row>
					    </div>
			    	</div>	
		      	
	   	);
	}
}

export default Clock;
