import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';


@observer
class HomePage extends Component {
   componentWillMount(){

   }
   render() {
      return (
         <div>
            <h1>This is Home Page</h1>
            <Link className="btn btn-primary" to="/login">Login</Link>
            <div className="divider"></div>
            <Link className="btn btn-primary" to="/dashboard">Dashboard</Link>
            <div className="divider"></div>
            <Link className="btn btn-primary" to="/register">Register</Link>

         </div>
      )
   }
}



export default HomePage;
