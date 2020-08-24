import React, { useState } from 'react'

export default function InputBox(props) {
    const [inputVal, setInputVal] = useState(""); //stores the text value of the input box

    function handleChange({ target }) {//sends the text value back to the parent component.
        setInputVal(target.value)
        props.changeValue([props, target.value])
    }
    return (
        <>
        <p>{props.title}</p>
                <input type={`${props.inputType}`} value={inputVal} onChange={handleChange} placeholder={props.placehold}></input>
    </>
    )
}
