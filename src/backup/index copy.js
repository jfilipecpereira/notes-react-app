import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class NotesComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }


  componentDidMount() {
    var url = "https://www.localhost/todo-api-laravel/public/api/users";
    var bearer = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MTQ2ZmFkYS0xMTY5LTRiMzctYjQ0OS02MzNlM2IxY2Q2NGYiLCJqdGkiOiI0NjE2MGRiYWUzYzQ3NzVlNDdjNDNmNTJlZDRkZWE2MjJhNTdlZDU1N2ZmNDE3NDgzYTMyNmM1NTdjYWUyNDAzOTVjNGI4ZjA3OTQ2MzBiZiIsImlhdCI6MTU5NzQxMjk0NCwibmJmIjoxNTk3NDEyOTQ0LCJleHAiOjE2Mjg5NDg5NDQsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.M16HCD0zvnhT93Ou6KsWYTOP4lm_ishBOKb4pGtg33ZtovsMcDK9R6drP3YYJ6L5GJBGosBloaZPkICJOXQcTc8Qc2MAyCmP7srRRwLENZRreAjRVpihZqMM_N73Qd1XNfzSTKztkEontFfcTo1LXWPdC5FNdKEuYml7e5qOOwkC13U-STZmSEIl366_Wv7GTTNco-IBbe8AvVkqeL0dwE28H1Ko3b5nj-scodSkgvho5X2u4GIavrXGMrV0Oy-7fPt19rgYvtMQS55ND9LfJq18cj5_dkMo_B184MwiO7CtIC7LrY2L6LsfqT-A-NitHfGu5ZdsqaHqST2iGXGPOr5I_El490Ncn9Yb9whK2FNHbXbaFNjpZhdLnRAPz5iIcRb7mLfPZM-aj1zgs0ChdRsWLuzYybQoC-OrsQoj3Y8u5DgWGwKH9d-mc6Vo9M_QuesZafOmnwxra3jcKLTCe_uqDSeeY8Jp24XEa9w23wRK8cftHY4AIKRBnDKijLf21bVdtTtISKj13J9R4_aFXZV7MRs6VIAQGMWsoV0Mm0UbCeJAJ1ZcKye-i97AkcvWCdXxGGI2htGFUkCPnZ2OWGF7hUEqzdyDUBimbSY4l6dGniUVKZFwCboD3ixAe3lB506mXQYd7oHXl9n5HcgwQmPhXDDayFdyI0UJml4rQH4';
    fetch(`https://www.localhost/todo-api-laravel/public/api/notas/1`)
      .then(res => res.json())
      .then(json => this.setState({ notes: json }));


}



  render() {
    console.log(this.state);
    return (
      
      <div >


        <h2 style={{textAlign: 'center'}}>Notas</h2>


            {this.state.notes.map(emp => (
              <div>
                

                <tr key={emp.Id}>
                
                  <p>{emp.images.path}</p>
                  <p>{emp.password}</p>
                  <p>{emp.avatar}</p>
                  </tr>
                  <div class="card" style={{width: '800px'}}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
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

const element=<NotesComponent></NotesComponent>

ReactDOM.render(element,document.getElementById("root"));

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
