import React, { useState } from 'react'
import MenuBar from '../components/MenuBar'

export default function Workout() {
    const [workoutSettings, setWorkoutSettings] = useState({ duration: 60, type: 'Full Body', useTUTGuide: true });
    const [workoutPlan, setWorkoutPlan] = useState({});
    const [trigger, setTrigger] = useState(false)
    function changeSettings(setting, newValue) {
        let tempSett = workoutSettings;
        if (setting === 'duration') {
            if (workoutSettings.duration === 'As long as it takes') {
                workoutSettings.duration = 0;
            } else {
                newValue = tempSett.duration += newValue;
            }
        }
        if (newValue < 0) {
            newValue = 'As long as it takes'
        }
        tempSett[setting] = newValue;
        setWorkoutPlan(tempSett)
        setTrigger(!trigger);
    }
    return (
        <div>
            <MenuBar />
            <h1>Workout Duration: {workoutSettings.duration}</h1>
            <button onClick={() => { changeSettings('duration', 5) }}>+</button>
            <button onClick={() => { changeSettings('duration', -5) }}>-</button>
            <h1>Workout Type: {workoutSettings.type}</h1>
            <button onClick={() => { changeSettings('type', 'Full Body') }}>Full Body</button>
            <button onClick={() => { changeSettings('type', 'Upper Body') }}>Upper Body</button>
            <button onClick={() => { changeSettings('type', 'Lower Body') }}>Lower Body</button>
            <h1>Time under tension guide?: {workoutSettings.useTUTGuide}</h1>
            <button onClick={() => { changeSettings('useTUTGuide', !workoutSettings.useTUTGuide) }}>Yes/No</button>
            <button>Generate Workout</button>
            <button>Start Workout</button>
        </div>
    )
}
