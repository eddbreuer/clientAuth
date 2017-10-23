import React from 'react';
import NavBar from './NavBar';

   class Body extends React.Component {
      render() {
         return (
            <div >
               <NavBar />
               <div className="container-fluid">
               <h1>BODY</h1>
               </div>
            </div>
         )
      }
   }

export default Body;
