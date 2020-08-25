import React, { Component } from 'react';
import  { Redirect, Link } from 'react-router-dom'

class VerNotas extends Component {

  constructor(props) {
    
    super(props);
    this.state = {
      notes: [],
      user:localStorage,
      id_user: localStorage["id_user"]
    };
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


  var url = "https://www.localhost/todo-api-laravel/public/api/users";
  var bearer = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MTQ2ZmFkYS0xMTY5LTRiMzctYjQ0OS02MzNlM2IxY2Q2NGYiLCJqdGkiOiI0NjE2MGRiYWUzYzQ3NzVlNDdjNDNmNTJlZDRkZWE2MjJhNTdlZDU1N2ZmNDE3NDgzYTMyNmM1NTdjYWUyNDAzOTVjNGI4ZjA3OTQ2MzBiZiIsImlhdCI6MTU5NzQxMjk0NCwibmJmIjoxNTk3NDEyOTQ0LCJleHAiOjE2Mjg5NDg5NDQsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.M16HCD0zvnhT93Ou6KsWYTOP4lm_ishBOKb4pGtg33ZtovsMcDK9R6drP3YYJ6L5GJBGosBloaZPkICJOXQcTc8Qc2MAyCmP7srRRwLENZRreAjRVpihZqMM_N73Qd1XNfzSTKztkEontFfcTo1LXWPdC5FNdKEuYml7e5qOOwkC13U-STZmSEIl366_Wv7GTTNco-IBbe8AvVkqeL0dwE28H1Ko3b5nj-scodSkgvho5X2u4GIavrXGMrV0Oy-7fPt19rgYvtMQS55ND9LfJq18cj5_dkMo_B184MwiO7CtIC7LrY2L6LsfqT-A-NitHfGu5ZdsqaHqST2iGXGPOr5I_El490Ncn9Yb9whK2FNHbXbaFNjpZhdLnRAPz5iIcRb7mLfPZM-aj1zgs0ChdRsWLuzYybQoC-OrsQoj3Y8u5DgWGwKH9d-mc6Vo9M_QuesZafOmnwxra3jcKLTCe_uqDSeeY8Jp24XEa9w23wRK8cftHY4AIKRBnDKijLf21bVdtTtISKj13J9R4_aFXZV7MRs6VIAQGMWsoV0Mm0UbCeJAJ1ZcKye-i97AkcvWCdXxGGI2htGFUkCPnZ2OWGF7hUEqzdyDUBimbSY4l6dGniUVKZFwCboD3ixAe3lB506mXQYd7oHXl9n5HcgwQmPhXDDayFdyI0UJml4rQH4';
  fetch(`http://www.localhost/todo-api-laravel/public/api/notas/`+this.state.id_user)
    .then(res => res.json())
    .then(json => this.setState({ notes: json }));
}


removeNote(id) {
  var array = [...this.state.notes]; // make a separate copy of the array
  var index = array.indexOf(id.value)
  
  console.log(id)
  if (index !== -1) {
    array.splice(index, 1);
    this.setState({notes: array});
  }

  var i;
  for (i = 0; i < array.length; i++) {
    console.log(array[i].id);
    if(array[i].id==id)
      console.log('teste');
      array.splice(i, 1);
  }
  this.setState({notes: array});
  console.log(this.state)
}

remove(id) {

  if (window.confirm('Are you sure you wish to delete this item?')){

    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
    };
    
    fetch("http://www.localhost/todo-api-laravel/public/api/notas/"+id, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

      alert("Nota apagada com sucesso");
      window.location.href = "/verNotas"
      //this.removeNote(id)

  }
}



  render() {
    return (
      
      <div >
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

        <br></br><br></br>
        <h2 style={{textAlign: 'center'}}>Notas</h2>

            {this.state.notes.map(emp => (
              <div>
                

                <tr key={emp.Id}>
                
                  <p>{emp.images.path}</p>
                  <p>{emp.password}</p>
                  <p>{emp.avatar}</p>
                  </tr>
                  <div class="card" style={{width: '800px',  margin: 'auto', width: '800px'}}>
                    <div class="card-body">
                      <div style={{float: 'right'}}  onClick={() => this.remove(emp.id)}><i class="fa fa-trash delete" aria-hidden="true" ></i></div>
                      <h5 class="card-title">{emp.title}</h5>
                      <p class="card-text">{emp.content}</p>

                      {emp.images.map(img => <img src={img.path} style={{maxWidth: '700px'}} alt="Logo" />)}

                    </div>
                </div>

                </div>
            ))}         

      </div>
      );
    }

}

export default VerNotas;
