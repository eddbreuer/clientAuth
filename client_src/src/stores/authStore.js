import { action, observable } from 'mobx';
import api from '../api'

class AuthStore {

   @observable errors = undefined;

   @action reg(data) {
      api.user.register(data)
      // .then((res) => )
   }

}

const store = new AuthStore();
export default store;
