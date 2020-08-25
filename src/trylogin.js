import './form.css';
import React, { Component } from 'react';

class TryLogin extends Component {

  constructor(props) {
    super(props);
    this.state = { email:null, password:null, token:null, id_user:null, isLoggedIn: true };
  }

  componentDidMount() {
    
    var formdata = new FormData();
    formdata.append("email", localStorage.email);
    formdata.append("password", localStorage.password);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://www.localhost/todo-api-laravel/public/api/login", requestOptions)
      .then(response => response.json())
      .then(
        (response) => {
           this.setState({
            token: response.access_token,
            id_user: response.id_user,
            isloggedin: true
          });
      })
      .then(localStorage.setItem('isloggedin', true))
      .then(localStorage.setItem('id_user', this.state.id_user))
      //.catch(error => console.log('error', error));
      .catch(error => this.setState({isSubmitted: false}));
  }

  handleError = (event) => {
    this.setState({isSubmitted: false});
  }




render() {
  console.log(this.state);

  return (
    
    <div>
      {
      this.state.token != null ? (
        localStorage.setItem("id_user", this.state.id_user),
        localStorage.setItem("token", this.state.token),
        <h3 onLoad={window.location.href = "/verNotas"}>logado</h3>
      ) : (
        <h3 onLoad={this.handleError}>Erro ao realizar login</h3>
      )}
    </div>
    );
  }

}


export default TryLogin;
