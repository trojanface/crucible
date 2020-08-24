import axios from "axios";


//All client-side api calls
export default {
  login: function (user) {
    return axios.post('/auth/local', { username: user.username, password: user.userPassword })
  }
}