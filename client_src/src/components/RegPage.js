import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import RegForm from './forms/RegForm';
import { inject, observer } from 'mobx-react';

@inject('AuthStore')
@observer
   class RegPage extends Component {
      constructor(){
         super();
         this.state = {
            submited: false
         }
      }
      submit = (data) =>{
         this.props.AuthStore.reg(data)
         
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
                  <h1>Registration Page</h1><br/>
                  <br/>
                  <RegForm submit={this.submit}/>
               </div>
            </div>
         )
      }
   }

export default RegPage;
