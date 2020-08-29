import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { store } from '../GlobalContext'
import API from '../utilities/API';
export default function MenuBar() {
    const [scene, setScene] = useState('home')
    const { state, setState } = useContext(store);
        useEffect(() => {
           console.log(state)
        }, [])
    if (scene === 'addExercise') {
        return <Redirect to='/newexercise' />
    }
    if (scene === 'addEquipment') {
        return <Redirect to='/newequipment' />
    }
    if (scene === 'settings') {
        return <Redirect to='/settings' />
    }
    if (scene === 'workout') {
        return <Redirect to='/workout' />
    }
    if (scene === 'progress') {
        return <Redirect to='/progress' />
    }
    if (scene === 'logout') {
        API.logOut();
        return <Redirect to='/logout' />
    }
    return (
        <div>
            <button onClick={() => {setScene('addExercise')}} type="button">Add Exercise</button>
            <button onClick={() => {setScene('addEquipment')}} type="button">Add Equipment</button>
            <button onClick={() => {setScene('settings')}} type="button">User Settings</button>
            <button onClick={() => {setScene('workout')}} type="button">Start Workout</button>
            <button onClick={() => {setScene('progress')}} type="button">View Progress</button>
            <button onClick={() => {setScene('logout')}} type="button">Logout</button>
        </div>
    )
}
