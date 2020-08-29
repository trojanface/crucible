import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { store } from '../GlobalContext'
import MenuBar from '../components/MenuBar'
export default function Home() {
    return (
        <div>
           <MenuBar/>
        </div>
    )
}
