import axios from 'axios';
import AppStore from './stores/appStore';

const credentials = {

   if(AppStore.token) {
      axios.defaults.headers.common.authorization = `Bearer ${AppStore.token}`;
   } else {
      delete axios.defaults.headers.common.authorization;
   }
}
export default credentials
