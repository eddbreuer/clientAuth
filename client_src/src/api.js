import axios from 'axios';




// const header =  { headers: { "Authorization": `${}`}};
// console.log(AppStore.currentUserID);
const API_ROOT = "http://localhost:3000/api/";

export default {
   user: {

      register: data =>
         axios.post(`${API_ROOT}clients`, data),

      login: data =>
      axios.post(`${API_ROOT}clients/login`, data),

      current: (token, id) =>
      axios.get(`${API_ROOT}clients/${id}`, { headers: { "Authorization": `${token}`}}),


   }

}
