import React from 'react'

const Username = (props) => {

    const updateInput = (e) => {
        props.setUsername(e.target.value)
    }
    return (
        <div>
            <input onChange={updateInput} placeholder='enter username' />
        </div>
    )
}

export default Username