import React, { useState } from 'react'
import InputBox from '../components/InputBox'

export default function AddEquipment() {
    const [newEquipment, setNewEquipment] = useState({name: '', type: '', minWeight: '', maxWeight: ''})
    function equipmentInput(change) {
        let tempEquip = newEquipment;
        tempEquip[change[0].indexTitle] = change[1]
        setNewEquipment(tempEquip)
    }
    function addEquipment(event) {
        event.preventDefault();
        // API.login({ username: user.username, password: user.password }).then(() => {
        //     setScene('home');
        //     console.log("logged in successful");
        // }).catch((err) => {
        //     console.log(err)
        // });
    }
    return (
        <div>
            <form onSubmit={addEquipment}>
                <InputBox inputType="text" indexTitle="name" changeValue={equipmentInput} title="Name" placehold="" />
                <InputBox inputType="text" indexTitle="type" changeValue={equipmentInput} title="Type" placehold="" />
                <InputBox inputType="number" indexTitle="minWeight" changeValue={equipmentInput} title="Min. Weight" placehold="" />
                <InputBox inputType="number" indexTitle="maxWeight" changeValue={equipmentInput} title="Max. Weight" placehold="" />
                <button type="submit">Add Equipment</button>
            </form>
        </div>
    )
}
