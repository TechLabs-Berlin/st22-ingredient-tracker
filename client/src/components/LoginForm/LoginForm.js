import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import './LoginForm.css'

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    };

    function handleSubmit(event) {
        event.preventDefault();
    };

    return (
        <div className='columns' id='loginForm'>
            <div className='form card m-4 p-4' onSubmit={handleSubmit}>
                {/* Title */}
                <h1 className='title m-2 mb-6 has-text-primary'>Login</h1>

                {/* Input Fields */}
                <div>
                    <div className='email m-2 my-4'>
                        <label className='has-text-primary has-text-weight-semibold is-size-5' htmlFor='email'>Email</label>
                        <input className='input is-primary is-medium' type='email' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>

                    <div className='password m-2 my-4'>
                        <label className='has-text-primary has-text-weight-semibold is-size-5' htmlFor='password'>Password</label>
                        <input className='input is-primary is-medium' type='password' id='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                        <p className='is-clickable is-size-7 has-text-grey m-2 mr-5' id='forgotPassword'>Forgot password?</p>
                    </div>
                </div>

                {/* Login Button */}
                <div className='level my-5'>
                    <div className='level-item'>
                        <button className='button is-primary is-medium my-5' style={{ width: '150px' }} type='submit' disabled={!validateForm()}>Login</button>
                    </div>
                </div>


                {/* Social Media Login */}
                <div className='m-4'>

                    {/* Separation Line */}
                    <div className='mb-6'
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>

                        <div
                            style={{
                                flex: 1,
                                height: '1px',
                                backgroundColor: 'hsl(0, 0%, 71%)'
                            }} />

                        <div>
                            <p
                                style={{
                                    width: '70px',
                                    textAlign: 'center',
                                    color: 'hsl(0, 0%, 48%) '
                                }}
                                className='has-text-weight-light'>
                                OR
                            </p>
                        </div>

                        <div
                            style={{
                                flex: 1,
                                height: '1px',
                                backgroundColor: 'hsl(0, 0%, 71%) '
                            }} />
                    </div>

                    {/* Social Media Buttons */}
                    <p className='buttons is-flex-direction-column is-align-content-center'>
                        <button className='button is-primary is-outlined is-rounded' style={{ width: '225px', margin: '6px' }}>
                            <span className='icon is-small'>
                                <FaGoogle />
                            </span>
                            <span>Login with Google</span>
                        </button>

                        <button className='button is-primary is-outlined is-rounded' style={{ width: '225px', margin: '6px' }}>
                            <span className='icon is-small'>
                                <FaFacebook />
                            </span>
                            <span>Login with Facebook</span>
                        </button>

                        <button className='button is-primary is-outlined is-rounded' style={{ width: '225px', margin: '6px' }}>
                            <span className='icon is-small'>
                                <FaTwitter />
                            </span>
                            <span>Login with Twitter</span>
                        </button>
                    </p>

                </div>

                {/* Registration Link */}
                <div className='level'>
                    <div className='level-item'>
                        <div className='is-flex is-align-content-flex-start mt-6 mb-5'>
                            <p>Not a member yet?</p>
                            <p className='is-clickable has-text-primary ml-1'>Register here.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};


export default LoginForm;


