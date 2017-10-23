import { action, observable } from 'mobx';
// import AppStore from './appStore';
// import UserStore from './userStore';
import api from '../api';



class AuthStore {

   @observable errors = undefined;
   @observable inProgress = false;
   @observable token = window.localStorage.getItem('access_token');;
   @observable currentUserId;
   @observable User = {
      name: '',
      email: '',
      username: ''
   }

   @action auth(data) {
      this.inProgress = true;
      api.user.login(data)
         .then((res) =>
            this.setTokenId(res.data))
   }

   @action setTokenId(data) {
      this.currentUserId = data.userId;
      this.setUser(data.id, data.userId);
      if(!this.token) {
         window.localStorage.setItem('access_token', data.id);
         window.sessionStorage.setItem('access_id', data.userId);
      }

   }
   @action setUser(token, id){
      api.user.current(token, id)
      .then((res) => {
         this.User.name = res.data.name;
         this.User.email = res.data.email;
         this.User.username = res.data.username;})
   }



}

const store = new AuthStore();
export default store;
