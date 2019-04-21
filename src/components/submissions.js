import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './css/submissions.css';

class Submissions extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
        fields: {},
        errors: {},
        alert: {}, 
        showAlert: false   
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
    this.alertClose = this.alertClose.bind(this);  
  }

  handleChange(e) {

    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ 
          fields
        });
  }

  validateForm() {
    let fields = this.state.fields;
    let errors ={};
    let formIsValid = true;

    if (!fields["first_name"]) {
      formIsValid = false;
      errors["first_name"] = "*Enter your first name!";
    }

    if (!fields["last_name"]) {
      formIsValid = false;
      errors["last_name"] = "*Enter your last name!";
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email";
    } 

    if (typeof fields["email"] !== "undefined") {      
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email.";
      }
    }

    if (!fields["slogan"]) {
      formIsValid = false;
      errors["slogan"] = "*Enter slogan with at least 50 characters!";    
    } else {
      if (fields["slogan"].length < 50) {
        formIsValid = false;
        errors["slogan"] = "*Slogan must have at least 50 characters!";
      }
    }

    this.setState({
      errors
    })

    return formIsValid;

  }
  
  
  handleSubmit(e) {    
    e.preventDefault();
    if (this.validateForm()) {
      fetch('https://bbt-server.herokuapp.com/submissions', {
        method: 'post',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.fields)
      })
      .then(response => response.json())
      .then(data => console.log(data));
      e.target.reset();     
      let fields = {};
      this.setState({        
        fields,
        alert: { message: "Sent Successfully! Good luck!" },
        showAlert: true
      });          
    }
    
  }

  alertClose(e) {
    this.setState({
      showAlert: false
    })
  }

  render() {

    return (
      <div>

        {this.state.showAlert === true &&
          <div className="alert">
            {this.state.alert.message}
            <button type="button" className="close" aria-label="Close" onClick={this.alertClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>        
        }

        <h1 className="text-uppercase">Submit your slogan!</h1>

        <div> Send us a slogan with a minimum 50 characters! The winner gets:
          <ul>
            <li>$500.00 cash prize!</li>
            <li>VIP access to backstage!</li>
            <li>Invitations to party events before and after the race!</li>
            <li>His slogan used for promoting the event</li>
          </ul>
        </div>
        
        <Form onSubmit={this.handleSubmit}>

          <Form.Group>
            <Form.Label>First Name:</Form.Label> 
            <Form.Control type="text" autoComplete="off" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
            <div className="errors">{this.state.errors.first_name}</div>
          </Form.Group> 

          <Form.Group>
            <Form.Label>Last Name:</Form.Label> 
            <Form.Control type="text" autoComplete="off" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
            <div className="errors">{this.state.errors.last_name}</div>
          </Form.Group> 

          <Form.Group>
            <Form.Label>Email:</Form.Label> 
            <Form.Control type="email" autoComplete="off" name="email" value={this.state.email} onChange={this.handleChange} />
            <div className="errors">{this.state.errors.email}</div>
          </Form.Group> 

          <Form.Group>
            <Form.Label>Slogan:</Form.Label> 
            <Form.Control as="textarea" rows="3" autoComplete="off" name="slogan" value={this.state.slogan} onChange={this.handleChange} />
            <div className="errors">{this.state.errors.slogan}</div>
          </Form.Group> 

          <Button type="submit" value="Submit">Submit</Button>          
        </Form>
      </div>
    );
  }
}

export default Submissions;