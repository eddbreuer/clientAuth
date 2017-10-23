import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegPage from './components/RegPage';
import Dashboard from './components/Dashboard';

const App = () => (
      <div className="container">
         <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={RegPage} />
            <Route exact path="/" component={HomePage} />
         </Switch>
      </div>
   );
export default App;
