import React from 'react'
import { Redirect } from 'react-router-dom'
import { useState } from 'react'
import API from '../utilities/API';
import InputBox from '../components/InputBox';

export default function Login() {
    const [scene, setScene] = useState('login')
    const [user, setUser] = useState({ username: '', password: '' })
    function loginUserInput(change) {
        let tempUser = user;
        tempUser[change[0].indexTitle] = change[1]
        setUser(tempUser)
    }
    function login(event) {
        event.preventDefault();
        API.login({ username: user.username, password: user.password }).then(() => {
            setScene('home');
            console.log("logged in successful");
        }).catch((err) => {
            console.log(err)
        });
    }
    if (scene === 'home') {
        return <Redirect to='/home' />
    }
    if (scene === 'signup') {
        return <Redirect to='/signup' />
    }
    return (
        <div>
            <form onSubmit={login}>
                <InputBox inputType="text" indexTitle="username" changeValue={loginUserInput} title="Username" placehold="" />
                <InputBox inputType="password" indexTitle="password" changeValue={loginUserInput} title="Password" placehold="" />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account?</p>
            <button type="button" onClick={() => { setScene('signup') }}>Sign up</button>

        </div>
    )
}
