import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './css/riders.css';
import Locations from './locations';

class Riders extends Component {

	constructor(props) {
		super(props);
		this.state = {
			riders: [],
			loaded: false
		}
	}	  	


	componentDidMount() {
		fetch('https://bbt-server.herokuapp.com/riders')	
			.then(response => response.json())
			.then(json => {
				this.setState({
					riders: json,
					loaded: true
				})
			});
	}




  	render() {

  		var riders = this.state.riders;
  		
	    return (
		    	<div>
		    		<h1>MEET THE PLAYERS!</h1>		
		    		{this.state.loaded === true ?
		    			<Row className="border m-1">		    				
				    			{riders.map(rider => (
				    				<Col xs={6} sm={3} key={rider.id}>
				    					<div class="postit text-center mt-3">{rider.first_name}<br />{rider.last_name}</div>
				    				</Col>
				    			))}
				    		
			    		</Row>	
			    	:
			    		<div className="w-50 mx-auto">
			                <Image src="/images/loading.jpg" fluid />
			            </div>
		    		}
		    		
		    		<h1>FOLLOW THE ACTION!!</h1>
		    		<div className="mapContainer">
		    			<Locations riders={riders} />
		    		</div>
		      	</div>		    
	   	);
	}
}

export default Riders;