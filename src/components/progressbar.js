import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class CustomProgressbar extends Component{
	constructor(props) {
		super(props);
	}
	render(){
	  return (
	    <div	    >
	      <div style={{ position: "absolute" }}>
	        <CircularProgressbar />
	      </div>
	    </div>
	  );
	}
}
export default CustomProgressbar;