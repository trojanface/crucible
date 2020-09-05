import React from 'react'
import { Redirect } from 'react-router-dom'
import { useContext, useState } from 'react'
import API from '../utilities/API';
import InputBox from '../components/InputBox';
import { store } from '../GlobalContext'


export default function Login() {
    const [scene, setScene] = useState('login')
    const [user, setUser] = useState({ username: '', password: '' })
    const { gUser, setGUser } = useContext(store);
//needs to set context to have logged in user details.
    function loginUserInput(change) {
        let tempUser = user;
        tempUser[change[0].indexTitle] = change[1]
        setUser(tempUser)
    }
    function login(event) {
        event.preventDefault();
        API.login({ username: user.username, password: user.password }).then((response) => {
            console.log("logged in successful");
            setGUser(response.data);//will need to prevent the password being sent in the response.
        }).then(() => {
            setScene('home');
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
