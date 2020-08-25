
import './form.css';
import React, { Component } from 'react';
import TryLogin from './trylogin.js'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { email:"", password:"", token:null, id_user:"", isloggedin: false, isSubmitted: false };
    
  }

  componentDidMount() {
    if(localStorage["isloggedin"] == "true" && localStorage["token"] != null){
      window.location.href = "/verNotas"
    }
  }


  login = (e) =>{
    localStorage.setItem('email', this.state.email);
    localStorage.setItem('password', this.state.password);
    this.setState({isSubmitted: true})
    e.preventDefault(); 
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleError = (event) => {
    this.setState({isSubmitted: false});
  }

render() {
  return (
    <div className="App">
      <div className="login-page">
        <div className="form">
          <form className="login-form" name="login-form" id="login-form" onClick={this.handleError} onSubmit={this.login.bind(this)}>
            <input type="text" name="email" id="email" placeholder="email" onChange={this.handleChange} name="email" value={this.state.email}  />
            <input type="password" name="password" id="password" placeholder="password" onClick={this.handleError} onChange={this.handleChange} name="password" value={this.state.password} />
            <button type="submit" form="login-form">login</button>
            <p className="message">Not registered? <a href="/registar">Create an account</a></p>
          </form>
          {this.state.isSubmitted ? (
            <TryLogin/>
            ) : (
              null
            )}
        </div>
      </div>
    </div>
    );
  }

}


export default Login;
