import React from 'react'
import { Redirect } from 'react-router-dom'
import { useState } from 'react'
import InputBox from '../components/InputBox';
import API from '../utilities/API';


export default function Signup() {
    const [scene, setScene] = useState('signup');
    const [newUser, setNewUser] = useState({ username: '', firstname: '', lastname: '', email: '', password: '', height: '', weight: '', DOB: '', gender: '' })
    //interprets input box changes for a new user
    function newUserInput(change) {
        let tempUser = newUser;
        tempUser[change[0].indexTitle] = change[1]
        setNewUser(tempUser)
    }
    function newUserSubmit(event) {
        event.preventDefault();
        API.addUser(newUser).then(() => {
            console.log("user added");
        }).catch((err) => {
            console.log(err);
        })
    }
    if (scene === 'login') {
        return <Redirect to='/' />
    }
    return (
        <div>
            <form onSubmit={newUserSubmit}>
                <InputBox inputType="text" indexTitle="username" changeValue={newUserInput} title="Username" placehold="" />
                <InputBox inputType="text" indexTitle="firstname" changeValue={newUserInput} title="First Name" placehold="" />
                <InputBox inputType="text" indexTitle="lastname" changeValue={newUserInput} title="Last Name" placehold="" />
                <InputBox inputType="email" indexTitle="email" changeValue={newUserInput} title="Email" placehold="" />
                <InputBox inputType="password" indexTitle="password" changeValue={newUserInput} title="Password" placehold="" />
                <InputBox inputType="number" indexTitle="height" changeValue={newUserInput} title="Height" placehold="" />
                <InputBox inputType="number" indexTitle="weight" changeValue={newUserInput} title="Weight" placehold="" />
                <InputBox inputType="date" indexTitle="DOB" changeValue={newUserInput} title="DOB" placehold="" />
                <InputBox inputType="text" indexTitle="gender" changeValue={newUserInput} title="Gender" placehold="" />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account?</p>
            <button type="button" onClick={() => { setScene('login') }}>Log In</button>
        </div>
    )
}
