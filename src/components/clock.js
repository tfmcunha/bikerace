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
	    	
		    		<div className="sidebar mt-5">
		    			<div className="layer p-4">
				    		<h1 className="text-center">COUNTDOWN!</h1>
				    		<Row>
				    			<Col xs={3} md={12} className="cf-container p-1">	   		
		                     		<CircularProgressbar
			                            percentage={(this.state.days*100)/400}
			                            className="clock_fields"
			                            counterClockwise									        
			                        />	                      
		                      		<div className="pb-text">
			                      		<div className="value">{this.state.days}</div>
			                       		<div>Days</div>
			                        </div>			
						    	</Col>

						    	<Col xs={3} md={12} className="cf-container p-1">						    		
						    		<CircularProgressbar
								        percentage={(this.state.hours*100)/24}
								        counterClockwise
								        className="clock_fields"
								    />
			                     	<div className="pb-text">
			                      		<div className="value">{this.state.hours}</div>
			                       		<div>Hours</div>
			                        </div>		
						    	</Col>

						    	<Col xs={3} md={12} className="cf-container p-1">						    		
						    		<CircularProgressbar
								        percentage={(this.state.minutes*100)/60}
								        counterClockwise
								        className="clock_fields"
								    />									
                    				<div className="pb-text">
			                      		<div className="value">{this.state.minutes}</div>
			                       		<div>Minutes</div>
			                        </div>	
						    	</Col>

					    		<Col xs={3} md={12} className="cf-container p-1">					    			
						    		<CircularProgressbar
								        percentage={(this.state.seconds*100)/60}
								        counterClockwise
								        className="clock_fields"
								    />
                     				<div className="pb-text">
			                      		<div className="value">{this.state.seconds}</div>
			                       		<div>Seconds</div>
			                        </div>		
						    	</Col>	
					    	</Row>
					    </div>
			    	</div>	
		      	
	   	);
	}
}

export default Clock;