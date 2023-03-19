import React from 'react';

export default class ContactMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      alertName: "",
      alertEmail: "",
      alertMessage: "",
    }
  }

  handleOnBlurName(event) {
    var name        = event.target.value;
    var alertName = "";

    if(!name) {
      alertName = "Required field"; 
    }

    this.setState({
      name: name,
      alertName: alertName
    });
  }

  handleOnBlurEmail(event) {
    var email        = event.target.value;
    var alertEmail = "";
    const re = /\S+@\S+\.\S+/;

    if(!email) {
      alertEmail = "Required field"; 
    } else {
      const validEmail = re.test(email)
      if(!validEmail) {
        alertEmail = "Invalid email"; 
      }
    }

    this.setState({
      email: email,
      alertEmail: alertEmail
    });
  }

  handleOnBlurMessage(event) {
    var message        = event.target.value;
    var alertMessage = "";

    if(!message) {
      alertMessage = "Required field"; 
    }

    this.setState({
      message: message,
      alertMessage: alertMessage
    });
  }

  render() {
    return (
      <div className='contactPage'>
        <h1>Contact</h1>
        <div className="form-group sub-content">
          <label for="nameField">
            Name:
          </label>
          <input
            type="text"
            onBlur={this.handleOnBlurName.bind(this)}
            className="form-control" 
            id="nameField" 
          />
          {this.state.alertName}
          <br/>
          <label for="emailField">
            Email:
          </label>
          <input
            type="email"
            onBlur={this.handleOnBlurEmail.bind(this)}
            className="form-control" 
            id="emailField" 
          />
          {this.state.alertEmail}
          <br/>
          <label for="messageField">Message</label>
          <textarea className="form-control" id="messageField" rows="3" onBlur={this.handleOnBlurMessage.bind(this)}></textarea>
          {this.state.alertMessage}
          <br/>
          <button type="submit" class="btn btn-primary mt-4">Submit</button>
        </div>
      </div>
    );
  }
}