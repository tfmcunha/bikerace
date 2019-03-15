import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Home from './home';
import Gallery from './gallery';
import Riders from './riders';
import Submissions from './submissions';

class Main extends Component {

	

  	render() {
  		
	    return (
	    	<Row>
                <Col>
					<Route exact path='/' component={Home} />                
	    		    <Route path='/riders' component={Riders}/>
                    <Route path='/gallery' component={Gallery}/>
                    <Route path='/contest' component={Submissions}/>	                
	            </Col>
	        </Row>		
	   	);
	}
}

export default Main;
