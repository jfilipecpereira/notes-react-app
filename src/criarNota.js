import React, { Component } from 'react';
import axios from 'axios';

class CriarNotas extends Component {

  constructor(props) {
    super(props);
    this.state = { content:null, id_user: null, image: null, retorno: null, selected: false };


  }

componentDidMount() {

  localStorage.setItem('password', '')
  console.log(localStorage.isloggedin);
  let state_of_state = localStorage["isloggedin"];

  console.log(this.state)
  //Verificar se o utilizador está logado
  //Se não estiver redireciona para a rota de login
  if(state_of_state == false){
    window.location.href = "/login"
  };

  this.setState({id_user: localStorage["id_user"]});
}
  
handleImageChange = (e) => {
  this.setState({
    image: e.target.files[0],
    selected: true
  })

};

handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value});
}

handleSubmit = (e) => {
  e.preventDefault();
  var formdata = new FormData();
  formdata.append("id_user", this.state.id_user);
  formdata.append("title", this.state.title);
  formdata.append("content", this.state.content);

  //var f = document.getElementById("image");
  if(this.state.selected == false){
    console.log("nothing selected")
  }else{
    formdata.append('photo', this.state.image, this.state.image.name);
  };
  
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
  };


  fetch("http://www.localhost/todo-api-laravel/public/api/notas/post", requestOptions)
  .then(response => response.json())
  .then(response => console.log(response))
  .then(alert('Nota Criada com Sucesso'))
  .catch(error => console.log('error', error));
  console.log(this.state);

};




  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Notes APP</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/verNotas">Ver Notas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/criarNota">Criar Nota</a>
          </li>
        </ul>
        <a className="nav-link" href="/logout">Logout</a>
      </div>
    </nav>

      <div className="App" style={{width: '800px',  margin: 'auto', width: '800px'}}>
        <br></br><br></br>
        <h2 style={{textAlign: 'center'}}>Criar Nota</h2>
         <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Titulo da nota</label>
            <input type="text" id="title" name="title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insira o título da nota" onChange={this.handleChange}></input>
            <small id="emailHelp" className="form-text text-muted">Não insira mais de 250 carateres</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Corpo da nota</label>
            <textarea className="form-control" id="content" name="content" rows="3" onChange={this.handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Insira uma imagem</label>
            <input type="file" id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} className="form-control-file" id="exampleFormControlFile1"></input>
            </div>
          <button type="submit" className="btn btn-primary" >Registar nota</button>
        </form>
      </div>
      </div>
   );
    }

}

export default CriarNotas;
