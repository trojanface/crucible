import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { store } from '../GlobalContext'
import API from '../utilities/API';
export default function MenuBar() {
    const [scene, setScene] = useState('home')
    const { gUser, equipment, setEquipment, exercises, setExercises, exercisestats, setExerciseStats } = useContext(store);
    useEffect(() => {
        if (gUser === null) {
            setScene('logout');
        }
    }, [])
    useEffect(() => {
        if (gUser !== null) {
            console.log(gUser)
            if (equipment === null) {
                API.getEquipment(gUser.user_id).then((res) => { setEquipment(res.data) }).catch((err) => { console.log(err) });
            }
            if (exercises === null) {
                API.getExercises(gUser.user_id).then((res) => { setExercises(res.data) }).catch((err) => { console.log(err) });
            }
            // if (exercisestats === null) {
            //     API.getExcersiseStats().then((res)=> {setEquipment(res.data)}).catch((err)=>{console.log(err)});
            // }
        }
    }, [equipment, exercises])
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
            <button onClick={() => { setScene('addExercise') }} type="button">Add Exercise</button>
            <button onClick={() => { setScene('addEquipment') }} type="button">Add Equipment</button>
            <button onClick={() => { setScene('settings') }} type="button">User Settings</button>
            <button onClick={() => { setScene('workout') }} type="button">Start Workout</button>
            <button onClick={() => { setScene('progress') }} type="button">View Progress</button>
            <button onClick={() => { setScene('logout') }} type="button">Logout</button>
        </div>
    )
}
