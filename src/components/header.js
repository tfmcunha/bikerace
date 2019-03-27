import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Navbar, Nav } from 'react-bootstrap';
import './header.css';

class Header extends Component {
  	render() {
    	return (
    		<Col xs={12}>
    			<Row className="banner">
    				<h1>BOULDER BIKE RACE 2020</h1>
    			</Row>

    			<Row>
	    			<Col xs={12}>
		                <Navbar>
		                	<Nav>
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
