import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/home.css';

class Home extends Component {

	

  	render() {
  		
	    return (
	    	<Row>
	    		<Col xs={12} className="my-5">
	    			<div className="intro p-3">
		    			<h1 className="text-uppercase text-center">The biggest event in biking scene is back!</h1>
		    			<h2 className="py-3 text-justify">On April 1st, 2020, some of the best athlets on two wheels will faceoff on one of the most challenging scenarios in the world!</h2>
		    		</div>	
	    		</Col>
                <Col xs={12} lg={6}>   
                	<div>             	
                		<iframe title="vid" width="100%" height="315" src="https://www.youtube-nocookie.com/embed/x76VEPXYaI0?" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
					</div>                		
                </Col>
                <Col xs={12} lg={6}>   
                	<div className="contest">
	                	<div className="inner">             	
		                	<h1 className="text-uppercase">Be part of the action!</h1>
		                	<p className="text-justify">Create a slogan for <b>Boulder Bike Race</b>! and win prizes!! </p>
		                	<Button variant="primary"><Link to="/contest">Click here!</Link></Button>
		                </div>
		            </div>
	            </Col>
	        </Row>		
	   	);
	}
}

export default Home;
