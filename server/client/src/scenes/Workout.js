import React, { useState, useContext } from 'react'
import MenuBar from '../components/MenuBar'
import { store } from '../GlobalContext'
export default function Workout() {
    const [workoutSettings, setWorkoutSettings] = useState({ duration: 60, type: 'Full Body', useTUTGuide: true });
    const [workoutPlan, setWorkoutPlan] = useState({});
    const [workout, setWorkout] = useState([])
    const [trigger, setTrigger] = useState(false)
    const { gUser, exercises } = useContext(store);
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
    function generateWorkout() {
        //if full body workout
        switch (workoutSettings.type) {
            case 'Full Body':
                const isolation = exercises.filter((exercise) => exercise.isIsolation === true);
                //get all compound exercises
                const compound = exercises.filter((exercise) => exercise.isIsolation === false);
                const sortedByMuscGroup = {
                    chest: compound.filter((exercise) => exercise.primaryMusc.includes("chest")),
                    lats: compound.filter((exercise) => exercise.primaryMusc.includes("latissimus dorsi")),
                    back: compound.filter((exercise) => exercise.primaryMusc.includes("back")),
                    abs: compound.filter((exercise) => exercise.primaryMusc.includes("abdominals")),
                    shoulder: compound.filter((exercise) => exercise.primaryMusc.includes("shoulders")),
                    legs: compound.filter((exercise) => exercise.primaryMusc.includes("legs")),
                    bicep: compound.filter((exercise) => exercise.primaryMusc.includes("biceps")),
                    tricep: compound.filter((exercise) => exercise.primaryMusc.includes("triceps"))
                }
                let exerciseArray = [];
                for (let key of Object.entries(sortedByMuscGroup)) {
                    if (key[1].length > 1) {
                        exerciseArray.push(key[1].reduce(function (prev, curr) {
                            return Date.parse(prev) > Date.parse(curr) ? curr : prev;
                        }));
                    } else {
                        if (key[1].length > 0) {
                            exerciseArray.push(key[1][0])
                        } else {
                            //look at iso exercises to compensate
                        }
                    }



                }
                console.log(exerciseArray)
                setWorkout(exerciseArray)
                break;
            case 'Upper Body':
                setWorkout(['up'])
                break;
            case 'Lower Body':
                setWorkout(['low'])
                break;
            default:
                break;
        }

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
            <h1>Time under tension guide?: {workoutSettings.useTUTGuide ? <span>Yes</span> : <span>No</span>}</h1>
            <button onClick={() => { changeSettings('useTUTGuide', !workoutSettings.useTUTGuide) }}>Yes/No</button>
            <button onClick={generateWorkout}>Generate Workout</button>

            {workout[0] ?
                <>
                    <ul>
                        {workout.map((element, index) => {
                            return <li key={index}>{element.name}</li>
                        })}
                    </ul>
                    <button>Start Workout</button>
                </>
                :
                <></>
            }
        </div>
    )
}
