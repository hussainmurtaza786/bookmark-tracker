import React, { useState } from 'react'
import Header from '../Header/Header'
import style from './UserInput.module.css'
function UserInput(props) {

    const [enteredUrl, setEnteredUrl] = useState('');
    const [enteredName, setEnteredname] = useState('');

    const enterUrlHandler = (event) => {
        setEnteredUrl(event.target.value)
    }
    const enterNameHandler = (event) => {
        setEnteredname(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if (enteredName.trim().length === 0) {
            alert("Error")
        }
        if (!isValidUrl(enteredUrl)) {
            alert("Error: Invalid URL");
            return;
        }
        props.onSubmit(enteredName, enteredUrl)
        setEnteredUrl('')
        setEnteredname('')
    }
    const isValidUrl = (url) => {
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
        return urlRegex.test(url);
    };

    return (
        <div>
            <Header />
            <form onSubmit={submitHandler} className={style.form} >
                <div className={style.url}>
                    <label >Url:</label>
                    <input onChange={enterUrlHandler} value={enteredUrl} type="text" />
                </div>
                <div className={style.name}>
                    <label >Name:</label>
                    <input onChange={enterNameHandler} value={enteredName} type="text" />
                </div>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default UserInput
