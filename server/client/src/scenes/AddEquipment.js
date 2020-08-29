import React, { useState, useEffect, useContext } from 'react'
import InputBox from '../components/InputBox'
import API from '../utilities/API'
import { store } from '../GlobalContext'
import MenuBar from '../components/MenuBar'
export default function AddEquipment() {
    const [newEquipment, setNewEquipment] = useState({name: '', type: '', minWeight: '', maxWeight: '', increment: ''})
const [equipmentArray, setEquipmentArray] = useState([])
const { state, setState } = useContext(store);
    useEffect(() => {
        getEquipment();
    }, [])

    function equipmentInput(change) {
        let tempEquip = newEquipment;
        tempEquip[change[0].indexTitle] = change[1]
        setNewEquipment(tempEquip)
    }
    function addEquipment(event) {
        event.preventDefault();
        API.addEquipment({ ownedBy: state.user_id, name: newEquipment.name, type: newEquipment.type, minWeight: newEquipment.minWeight, maxWeight: newEquipment.maxWeight, increment: newEquipment.increment }).then(() => {
            console.log("New equipment added");
        }).catch((err) => {
            console.log(err)
        });
    }

    function getEquipment() {
        console.log('querying database')
        API.getEquipment(state.user_id).then((response) => {
            setEquipmentArray(response.data);
            console.log('equipment retrieved');
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>   
  <MenuBar/>

                <h1>Owned equipment</h1>
                {equipmentArray[0] ?
                <>
                    {equipmentArray.map((element, index) => {
                       return <>
                       <p key={index}>{element.name}</p>
                       </>
                    })}
                    
                    </>
                    :
                    <p>Loading Equipment...</p>
                }
                <h1>Add new equipment</h1>
            <form onSubmit={addEquipment}>
                <InputBox inputType="text" indexTitle="name" changeValue={equipmentInput} title="Name" placehold="" />
                <InputBox inputType="text" indexTitle="type" changeValue={equipmentInput} title="Type" placehold="" />
                <InputBox inputType="number" indexTitle="minWeight" changeValue={equipmentInput} title="Min. Weight" placehold="" />
                <InputBox inputType="number" indexTitle="maxWeight" changeValue={equipmentInput} title="Max. Weight" placehold="" />
                <InputBox inputType="number" indexTitle="increment" changeValue={equipmentInput} title="Smallest Increment" placehold="" />
                <button type="submit">Add Equipment</button>
            </form>
        </div>
    )
}
