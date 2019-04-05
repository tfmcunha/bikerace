import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Navbar, Nav } from 'react-bootstrap';
import './css/header.css';

class Header extends Component {
  	render() {
    	return (
    		<Col xs={12} className="banner">
    			<Row>
    				<h1 class="text-center title px-5">BOULDER BIKE TOUR</h1>
    			</Row>

    			<Row>
	    			<Col xs={12}>
		                <Navbar className="d-flex justify-content-center">
		                	<Nav className="text-center">
			                	<Nav.Item className="hvr-sweep-to-right"><Link className="nav-link" to="/">Home</Link></Nav.Item>
			                  <Nav.Item className="hvr-sweep-to-right"><Link className="nav-link" to="/riders">Riders</Link></Nav.Item>
			                  <Nav.Item className="hvr-sweep-to-right"><Link className="nav-link" to="/gallery">Gallery</Link></Nav.Item>			                  
			                </Nav>
		                </Navbar>
		            </Col>
    			</Row>
    		</Col>  		
  	  	);
  	}
}

export default Header;
