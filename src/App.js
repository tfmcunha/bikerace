import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Clock from './components/clock';
import Footer from './components/footer';


class App extends Component {
  	render() {
    	return (
    		<Container>
    			
    			<Header />
    			
    			<Row>
    				<Col xs={{span: 12, order: 2}} md={{span: 9, order: 1}}>
    					<Main />
    				</Col>
    				<Col xs={{span: 12, order: 1}} md={{span: 3, order: 2}}>
    					<Clock />
    				</Col>
    			</Row>

    			<Row>
    				<Footer />
    			</Row>       			
	    	</Container>
  	  	);
  	}
}

export default App;
