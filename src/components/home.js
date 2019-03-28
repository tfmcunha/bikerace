import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends Component {

	

  	render() {
  		
	    return (
	    	<Row>
	    		<Col xs={12}>
	    			<h1>The biggest event in biking scene is back!</h1>
	    			<p>On April 1st, 2020, some of the best athlets on 2 wheels will faceoff on one of the most challenging scenarios in the world!</p>
	    		</Col>
                <Col xs={12} md={6}>                	
                	<iframe title="vid" width="100%" height="315" src="https://www.youtube-nocookie.com/embed/x76VEPXYaI0?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col xs={12} md={6}>                	
                	<h1>Be a part of the action!</h1>
                	<p>Create a slogan for <b>Boulder Bike Race 2020</b>! and win prizes!! <Link to="/contest">Click here!</Link></p>
	            </Col>
	        </Row>		
	   	);
	}
}

export default Home;
