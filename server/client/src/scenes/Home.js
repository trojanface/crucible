import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
export default function Home() {
    const [scene, setScene] = useState('home')

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
    return (
        <div>
            <button onClick={() => {setScene('addExercise')}} type="button">Add Exercise</button>
            <button onClick={() => {setScene('addEquipment')}} type="button">Add Equipment</button>
            <button onClick={() => {setScene('settings')}} type="button">User Settings</button>
            <button onClick={() => {setScene('workout')}} type="button">Start Workout</button>
            <button onClick={() => {setScene('progress')}} type="button">View Progress</button>
        </div>
    )
}
