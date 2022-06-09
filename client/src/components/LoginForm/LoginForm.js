import React, { useState } from 'react';


function LoginForm() {

    return (
        <div className='form'>
            <h1>Login</h1>

            <div>
                <label>Email</label>
                <input className='input' type='email'></input>

                <label>Password</label>
                <input className='input' type='password'></input>
                <p>Forgot password?</p>
            </div>

            <div>
                <button>Login</button>
            </div>

            <div>
                <p>Or login using</p>
                <p>Google</p>
                <p>Facebook</p>
            </div>

            <div>
                <p>Not a member yet?</p>
                <button>Register here.</button>
            </div>
        </div>
    )
};

export default LoginForm;

