import React from 'react'

const Input = ({ type, name, className, value, handleChange, label}) => {
    return (
        <div>
            <label> {label} </label>
            <input type={type} name={name} className={className} value={value} onChange={handleChange}/>
        </div>
    )
}

export default Input
