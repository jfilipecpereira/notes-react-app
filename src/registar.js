import React, { Component } from 'react';
import axios from 'axios';
import TryRegister from './tryregister.js'

class Registar extends Component {

  constructor(props) {
    super(props);
    this.state = { email:null, password:null, name:null, avatar:"2" };


  }

componentDidMount() {

  
};

handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value});
}

handleSubmit = (e) => {
  e.preventDefault();
};

register = (e) =>{
  localStorage.setItem('name', this.state.name);
  localStorage.setItem('email', this.state.email);
  localStorage.setItem('password', this.state.password);
  this.setState({isSubmitted: true})
  e.preventDefault(); 
}


  render() {
    console.log(this.state);
    return (
      <div className="App">
      <div className="login-page">
        <div className="form">
          <form className="login-form" name="login-form" id="login-form" onSubmit={this.register.bind(this)}>
          <input type="text" name="name" id="name" placeholder="name" onChange={this.handleChange} name="name" value={this.state.name}  />
            <input type="text" name="email" id="email" placeholder="email" onChange={this.handleChange} name="email" value={this.state.email}  />
            <input type="password" name="password" id="password" placeholder="password" onChange={this.handleChange} name="password" value={this.state.password} />
            <button type="submit" form="login-form">Register</button>
            <p className="message">Already registered? <a href="/login">Sign In</a></p>
          </form>
          {this.state.isSubmitted ? (
            <TryRegister/>
            ) : (
              null
            )}
        </div>
      </div>
    </div>
   );
    }

}

export default Registar;
