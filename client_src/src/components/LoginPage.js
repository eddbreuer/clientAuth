import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './forms/LoginForm';
import { inject, observer } from 'mobx-react';

@inject('AuthStore')
@observer
   class LoginPage extends Component {
      constructor(){
         super();
         this.state = {
            submited: false
         }
      }
      submit = (data) =>{
         this.props.AuthStore.auth(data)
         this.setState({ submited: true });
      }

      render() {
         if (this.state.submited) {
            return (<Redirect to="/dashboard"/>)
         }
         return (
            <div className="row justify-content-center">
               <div className="col-5">
                  <Link to="/">Back</Link>
                  <h1>Login Page</h1><br/>
                  <br/>
                  <LoginForm submit={this.submit}/>
               </div>
            </div>
         )
      }
   }

export default LoginPage;
