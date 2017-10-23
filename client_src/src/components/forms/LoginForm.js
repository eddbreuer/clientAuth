import React, { Component } from 'react';


   class LoginForm extends Component {
   constructor(){
      super();
      this.state = {
         data: {
            email: "",
            password: ""
         },
         loading: false,
         errors: {}
         }
      }

   onChange = event => this.setState({
      ...this.state, data: {...this.state.data, [event.target.name]: event.target.value}
   })

   onSubmit(event) {
      event.preventDefault();
      this.props.submit(this.state.data)
   }
      render() {
         return (
            <form onSubmit={this.onSubmit.bind(this)}>
               <div className="form-group">
                  <label>Email</label>
                  <input
                     className="form-control"
                     required="true"
                     type="email"
                     name="email"
                     placeholder="Enter email"
                     onChange={this.onChange}
                  />
               </div>
               <div className="form-group">
                  <label>Pasword</label>
                  <input
                     className="form-control"
                     required="true"
                     type="password"
                     name="password"
                     placeholder="Enter password"
                     onChange={this.onChange}
                  />
               </div>
               <button className="btn btn-secondary">Login</button>
            </form>
         )
      }
   }

export default LoginForm;
