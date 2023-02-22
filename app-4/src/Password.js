import React from 'react'

const Password = (props) => {

    const updatePassword = (e) => {
        props.setPassword(e.target.value)
    }
    return (
        <div>
            <input type='password' onChange={updatePassword} placeholder='enter password' />
        </div>
    )
}

export default Password