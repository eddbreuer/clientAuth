import React from 'react';


const divstyle = {
   width: 300,
}

   class SideBar extends React.Component {

      render() {
         return (
         <div style= {divstyle}>
            <div className="card">
              <img className="card-img-top" src="" alt="Something here"/>
              <div className="card-body">
                <h4 className="card-title">Eduard Breuer</h4>
                <p className="card-text">Some quick information about meet groups and meetz</p>
               <div className="">
                  <a href="/profile" className="btn btn-default">Profile</a>
                  <a href="/profile" className="btn btn-default">Profile</a></div>
              </div>
            </div>
        </div>
         )
      }
   }

export default SideBar;
