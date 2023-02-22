import React from 'react'

const Button = (props) => {

    const alertHandler = () => {
        alert(`Username: ${props.username} Password: ${props.password}`)
    }
    return (
        <div>
            <button onClick={alertHandler}>Login</button>
        </div>
    )
}

export default Button