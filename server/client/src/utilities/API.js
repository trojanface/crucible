import axios from "axios";


//All client-side api calls
export default {
  logOut: function () {
    return axios.get('/logout');
  },
  getExercises: function (user) {
    return axios.get('/api/exercise/all/'+user)
  },
  getEquipment: function (user) {
    return axios.get('/api/equipment/all/'+user)
  },
  addExercise: function ({stage, fails, lastCompleted, ownedBy, name, type, primary, secondary, equipment, isPush, weight}) {
    let isIso = false;
    if (type === 'Isolation') {
      isIso = true;
    }
    return axios.post('/api/exercise', {fails: fails, stage: stage, lastCompleted: lastCompleted, weight: weight, isPush: isPush, ownedBy: ownedBy, name: name, isIsolation: isIso, primaryMusc: primary, secondaryMusc: secondary, equipmentRequired: equipment})
  },
  addEquipment: function ({ownedBy, name, type, minWeight, maxWeight, increment}) {
    return axios.post('/api/equipment', {ownedBy: ownedBy, name: name, type: type, minWeight: minWeight, maxWeight: maxWeight, increment: increment})
  },
    addUser: function ({username, firstname, lastname, email, DOB, gender, height, weight, password, ownedEquipment}) {
        return axios.post('/api/users', {ownedEquipment: ownedEquipment, userName: username, firstName: firstname, lastName: lastname, email: email, DOB: DOB, gender: gender, height: height, weight: weight, password: password})
      },
  login: function (user) {
    return axios.post('/auth/local', { userName: user.username, password: user.password })
  }
}