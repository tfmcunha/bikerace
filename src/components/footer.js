import React, { Component } from 'react';
import { Col, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./css/footer.css";



class Footer extends Component {
  	render() {
    	return (
    		<Col xs={12}>
    			<Navbar fixed="bottom" className="myfooter justify-content-end" >
	    			<Nav className="mr-1">
	                    <Nav.Item>
	                    	<Nav.Link href="mailto:tcunha_lp@hotmail.com">
	                    		<FontAwesomeIcon icon={faEnvelope} />
	                    	</Nav.Link>
	                    </Nav.Item>
	                    <Nav.Item>
	                    	<Nav.Link href="http://www.facebook.com" target="blank">
	                    		<FontAwesomeIcon icon={faFacebook} />
	                    	</Nav.Link>
	                    </Nav.Item>
	                    <Nav.Item>
	                    	<Nav.Link href="http://www.twitter.com" target="blank">
	                    		<FontAwesomeIcon icon={faTwitter} />
	                    	</Nav.Link>
	                    </Nav.Item>
	                    <Nav.Item>
	                    	<Nav.Link href="http://www.instagram.com" target="blank">
	                    		<FontAwesomeIcon icon={faInstagram} />
	                    	</Nav.Link>
	                    </Nav.Item>
	                </Nav>
	            </Navbar>  
    		</Col>    		
  	  	);
  	}
}

export default Footer;
