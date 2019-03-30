import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/home.css';

class Home extends Component {

	

  	render() {
  		
	    return (
	    	<Row>
	    		<Col xs={12}>
	    			<h1>The biggest event in biking scene is back!</h1>
	    			<p>On April 1st, 2020, some of the best athlets on 2 wheels will faceoff on one of the most challenging scenarios in the world!</p>
	    		</Col>
                <Col xs={12} lg={6}>   
                	<div>             	
                		<iframe title="vid" width="100%" height="315" src="https://www.youtube-nocookie.com/embed/x76VEPXYaI0?" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>                		
                </Col>
                <Col xs={12} lg={6}>   
                	<div class="contest">
	                	<div class="inner">             	
		                	<h1>Be part of the action!</h1>
		                	<p>Create a slogan for <b>Boulder Bike Race 2020</b>! and win prizes!! <Link to="/contest">Click here!</Link></p>
		                </div>
		            </div>
	            </Col>
	        </Row>		
	   	);
	}
}

export default Home;
