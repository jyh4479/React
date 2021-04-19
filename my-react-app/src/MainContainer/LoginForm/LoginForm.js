import React, {Component} from 'react';
import './LoginForm.css';

class LoginForm extends Component{
  render(){
    return(
      <div className="LoginForm">
        <form>
          <input type="text" placeholder="ID"></input>
          <input type="password" placeholder="PW"></input>
          <button type="button"> Login </button>
        </form>
      </div>
    )
  }
}
export default LoginForm;
