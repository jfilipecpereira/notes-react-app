
import logo from './logo.svg';
import './form.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentDidMount() {
    localStorage.clear();
    console.log(this.state);
    window.location.href = "/login"
  }


render() {
  return (
    
    <h1>.</h1>
    );
  }

}


export default Logout;
