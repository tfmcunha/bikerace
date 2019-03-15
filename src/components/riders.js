import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './riders.css';
import Locations from './locations';

class Riders extends Component {

	constructor(props) {
		super(props);
		this.state = {
			riders: []
		}
	}	  	

	componentDidMount() {
		fetch('http://localhost:3001/riders')	
			.then(response => response.json())
			.then(json => {
				this.setState({
					riders: json,
				})
			});
	}




  	render() {

  		var riders = this.state.riders;

	    return (
		    	<div>
		    		<h1>RIDERS</h1>		    	
		    		<Row>
		    			{riders.map(rider => (
		    				<Col xs={6} sm={2} key={rider.id}>          
		    					{rider.first_name} {rider.last_name}				    					
		    				</Col>
		    			))}
		    		</Row>	
		    		<div className="mapContainer">
		    			<Locations  riders={riders} />
		    		</div>
		      	</div>		    
	   	);
	}
}

export default Riders;