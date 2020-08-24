import React from 'react'
import {Redirect} from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
    const [scene, setScene] = useState('login')
    if (scene === 'signup') {
        return <Redirect to='/signup' />
    }
    return (
        <div>
            <form>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="password"></input>
            <button type="submit">Login</button>
            </form>
            <p>Don't have an account?</p>
            <button type="button" onClick={() => {setScene('signup')}}>Sign up</button>

        </div>
    )
}
