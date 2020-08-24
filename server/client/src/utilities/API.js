import axios from "axios";


//All client-side api calls
export default {
    addUser: function ({username, firstname, lastname, email, DOB, gender, height, weight, password}) {
        // console.log({userName: username, firstName: firstname, lastName: lastname, email: email, DOB: DOB, gender: gender, height: height, weight: weight, password: password})
        return axios.post('/api/users', {userName: username, firstName: firstname, lastName: lastname, email: email, DOB: DOB, gender: gender, height: height, weight: weight, password: password})
      },
  login: function (user) {
      console.log(user)
    return axios.post('/auth/local', { userName: user.username, password: user.password })
  }
}