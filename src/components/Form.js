import React from 'react'
import Button from './Button'
import Input from './Input'

function Form({email, password,handleChange, handleSubmit}) {
    return (
        <div className="form">
            <h1>Login to your account !</h1>
            <form onSubmit={handleSubmit}>
                <Input type="text" name="email" value={email} label="Email Address" handleChange={handleChange} />
                <Input type="password" name="password" value={password} label="Password" handleChange={handleChange}/>
                <div className="check">
                    <label for="checkbox">
                    <input type="checkbox"/>
                    Remember me
                    </label>
                    <a href="./" className="forgot">Forgot your password</a>
                </div>
            </form>
            <Button />
            <h4>Don't have an account? Sign up as a Teacher or Student</h4>
        </div>
    )
}

export default Form
