import React, { Component } from 'react';
import Validator from 'validator';
import InlineError from '../messages/InlineErrors';

   class RegForm extends Component {
   constructor(){
      super();
      this.state = {
         data: {
            name: "",
            username: "",
            email: "",
            password: ""
         },
         loading: false,
         errors: {},
         submited: false
         }
      }

   onChange = event => this.setState({
      ...this.state, data: {...this.state.data, [event.target.name]: event.target.value}
   })

   onSubmit = (e) => {
      e.preventDefault();
      const errors = this.validate(this.state.data);
      this.setState({ errors });
      if(Object.keys(errors).length === 0) {
         this.props.submit(this.state.data)
      }
   }

   validate = data => {
      const errors = {};
      if(!data.name) errors.name = "Name is Required";
      if(!data.username) errors.username = "Username is Required";
      if(!data.email) errors.email = "Email is Required";
      if(!Validator.isEmail(data.email)) errors.isEmail = "Not correct email";
      if(!data.password) errors.password = "Password can't be blank";
      if(data.password2 !== data.password) errors.password2 = "Passwords do not match"
      return errors;
   }

      render() {
         return (
            <form onSubmit={this.onSubmit.bind(this)}>
               <div className="form-group">
                  <label>Name</label>
                  <input
                     className="form-control"
                     type="name"
                     name="name"
                     placeholder="Enter name"
                     onChange={this.onChange}
                  />
                   {this.state.errors.name && <InlineError text={this.state.errors.name} />}
               </div>
               <div className="form-group">
                  <label>Username</label>
                  <input
                     className="form-control"
                     type="username"
                     name="username"
                     placeholder="Enter username"
                     onChange={this.onChange}
                  />
                  {this.state.errors.username && <InlineError text={this.state.errors.username} />}

               </div>
               <div className="form-group">
                  <label>Email</label>
                  <input
                     className="form-control"
                     type="email"
                     name="email"
                     placeholder="Enter email"
                     onChange={this.onChange}
                  />
                  {this.state.errors.email && <InlineError text={this.state.errors.email} />}

               </div>
               <div className="form-group">
                  <label>Pasword</label>
                  <input
                     className="form-control"
                     type="password"
                     name="password"
                     placeholder="Enter password"
                     onChange={this.onChange}
                  />
                  {this.state.errors.password && <InlineError text={this.state.errors.password} />}

               </div>
               <div className="form-group">
                  <label>Confirm Pasword</label>
                  <input
                     className="form-control"
                     type="password"
                     name="password2"
                     placeholder="Confirm password"
                     onChange={this.onChange}
                  />
                  {this.state.errors.password2 && <InlineError text={this.state.errors.password2} />}

               </div>
               <button className="btn btn-secondary">Login</button>
            </form>
         )
      }
   }

export default RegForm;
