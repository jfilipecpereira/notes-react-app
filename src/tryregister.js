import './form.css';
import React, { Component } from 'react';

class TryRegister extends Component {

  constructor(props) {
    super(props);
    this.state = { email:null, password:null, token:null, id_user:null, isLoggedIn: true, isSubmitted: false };
  }

  componentDidMount() {
    
    var formdata = new FormData();
    formdata.append("name", localStorage.name);
    formdata.append("email", localStorage.email);
    formdata.append("password", localStorage.password);
    formdata.append("avatar", "2");
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("http://www.localhost/todo-api-laravel/public/api/register", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      //.catch(error => console.log('error', error));
      .catch(error => this.setState({error:true}));


  }

  handleError = (event) => {
    this.setState({isSubmitted: false});
  }




render() {
  console.log(this.state);

  return (
    <div>
      {
      this.state.error == true ? (
        <h5 onLoad={this.handleError}>Aconteceu um erro</h5>
      ) : (
        <h5 >Registado com sucesso. Realize <a href="/login">Login</a></h5>
      )}
    </div>
    );
  }

}


export default TryRegister;
