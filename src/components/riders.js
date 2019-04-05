import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './css/riders.css';
import Locations from './locations';

class Riders extends Component {

	constructor(props) {
		super(props);
		this.state = {
			riders: []
		}
	}	  	


	componentDidMount() {
		fetch('https://bbt-server.herokuapp.com/riders')	
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
		    		<h1>MEET THE PLAYERS!</h1>		    	
		    		<Row>
		    			{riders.map(rider => (
		    				<Col xs={6} sm={3} key={rider.id}>
		    					<div class="postit text-center">{rider.first_name}<br />{rider.last_name}</div>
		    				</Col>
		    			))}
		    		</Row>	
		    		<h1>FOLLOW THE ACTION!!</h1>
		    		<div className="mapContainer">
		    			<Locations riders={riders} />
		    		</div>
		      	</div>		    
	   	);
	}
}

export default Riders;