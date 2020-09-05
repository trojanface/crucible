import React, { useState, useEffect, useContext } from 'react'
import InputBox from '../components/InputBox';
import API from '../utilities/API';
import { store } from '../GlobalContext'
import AddEquipment from './AddEquipment';
import MenuBar from '../components/MenuBar';
export default function AddExercise() {
    const [newExercise, setNewExercise] = useState({ stage: 0, fails: 0, lastCompleted: Date.now(), weight: 0, name: '', type: 'Compound', primary: '', secondary: '', equipment: '', isPush: false })
    const [exerciseArray, setExerciseArray] = useState([])

    const [equipmentArray, setEquipmentArray] = useState([])
    const [eqNames, setEqNames] = useState('')
    let muscleGroups = ['chest', 'back', 'abdominals', 'legs', 'shoulders', 'glutes', 'biceps', 'triceps', 'latissimus dorsi'];
    const [trigger, setTrigger] = useState(false)
    const { gUser, equipment, exercises, setExercises } = useContext(store);
    useEffect(() => {
        setEquipmentArray(equipment)
        setExerciseArray(exercises)
    }, [])
    function exerciseInput(change) {
        let tempEx = newExercise;
        tempEx[change[0].indexTitle] = change[1]
        setNewExercise(tempEx)
    }
    function addExercise(event) {
        event.preventDefault();
        API.addExercise({stage: newExercise.stage, fails: newExercise.fails, lastCompleted: newExercise.lastCompleted, weight: newExercise.weight, ownedBy: gUser.user_id,isPush: newExercise.isPush, name: newExercise.name, type: newExercise.type, primary: newExercise.primary, secondary: newExercise.secondary, equipment: newExercise.equipment }).then(() => {
            console.log("New exercise added");
            setExercises(null);//This will trigger an api request to update the list however it also needs to refresh react component tree
        }).catch((err) => {
            console.log(err)
        });
    }
    function addEquipment({ name, equipment_id }) {
        console.log(equipment_id)
        let tempEx = newExercise;
        tempEx.equipment = `${tempEx.equipment},${equipment_id}`
        setNewExercise(tempEx)
        let tempEq = eqNames;
        tempEq = `${tempEq}, ${name}`
        setEqNames(tempEq)
    }

    function addPrimary(muscle) {
        let tempEx = newExercise;
        tempEx.primary = `${tempEx.primary},${muscle}`
        setNewExercise(tempEx)
        setTrigger(!trigger);
    }

    function addSecondary(muscle) {
        let tempEx = newExercise;
        tempEx.secondary = `${tempEx.secondary},${muscle}`
        setNewExercise(tempEx)
        setTrigger(!trigger);
    }


    return (
        <div>
            <MenuBar/>
            <h1>Current Exercises</h1>
            {exerciseArray[0] ?
                <>
                    {exerciseArray.map((element, index) => {
                        return <>
                            <p key={index}>{element.name}</p>
                        </>
                    })}

                </>
                :
                <p>Loading Exercise...</p>
            }
            <h1>Add new Exercise</h1>

            <InputBox inputType="text" indexTitle="name" changeValue={exerciseInput} title="Name" placehold="" />
            <InputBox inputType="number" indexTitle="weight" changeValue={exerciseInput} title="Starting Weight" placehold="" />
            <label>Type: {newExercise.type}</label>
            <button onClick={() => {
                let tempEx = newExercise;
                tempEx.type = 'Compound'
                setNewExercise(tempEx)
                setTrigger(!trigger);
            }}>Compound</button>
            <button onClick={() => {
                let tempEx = newExercise;
                tempEx.type = 'Isolation'
                setNewExercise(tempEx)
                setTrigger(!trigger);
            }}>Isolation</button>
            <label>Push/Pull: {newExercise.isPush ? <span>Push</span> : <span>Pull</span>}</label>
            <button onClick={() => {
                let tempEx = newExercise;
                tempEx.isPush = true
                setNewExercise(tempEx)
                setTrigger(!trigger);
            }}>Push</button>
            <button onClick={() => {
                let tempEx = newExercise;
                tempEx.isPush = false
                setNewExercise(tempEx)
                setTrigger(!trigger);
            }}>Pull</button>
            <label>Primary muscles targeted: {newExercise.primary}</label>
            {muscleGroups.map((element, index) => {
                return <>
                    <button onClick={() => { addPrimary(element) }} key={index}>{element}</button>
                </>
            })}

            <label>Secondary Muscles targeted: {newExercise.secondary}</label>
            {muscleGroups.map((element, index) => {
                return <>
                    <button onClick={() => { addSecondary(element) }} key={index}>{element}</button>
                </>
            })}

            <label>Equipment Required: {eqNames}</label>
            {equipmentArray[0] ?
                <>
                    {equipmentArray.map((element, index) => {
                        return <>
                            <button onClick={() => { addEquipment(element) }} key={index}>{element.name}</button>
                        </>
                    })}

                </>
                :
                <p>Loading Equipment...</p>
            }
            <button onClick={addExercise}>Add Exercise</button>
        </div>
    )
}
