import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AuthStore from './stores/authStore';
import UserStore from './stores/userStore';
import AppStore from './stores/appStore';

const store = {
   AuthStore,
   UserStore,
   AppStore
}

ReactDOM.render(
   <Provider {...store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>,
      document.getElementById('root'));
registerServiceWorker();
