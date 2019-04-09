import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
		               
		                	<Nav className="d-flex justify-content-center text-center">
			                	<Nav.Item className="hvr-sweep-to-top"><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></Nav.Item>
			                  <Nav.Item className="hvr-sweep-to-top"><NavLink activeClassName="selected" className="nav-link" exact to="/riders">Riders</NavLink></Nav.Item>
			                  <Nav.Item className="hvr-sweep-to-top"><NavLink activeClassName="selected" className="nav-link" exact to="/gallery">Gallery</NavLink></Nav.Item>			                  
			                </Nav>
		              
		            </Col>
    			</Row>
    		</Col>  		
  	  	);
  	}
}

export default Header;
