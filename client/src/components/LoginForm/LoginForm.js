import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import './LoginForm.css'


function LoginForm() {

    return (
        <div className='form card card m-4 p-4'>
            {/* Title */}
            <h1 className='title m-2 mb-6 has-text-primary'>Login</h1>

            {/* Input Fields */}
            <div>
                <div className='email m-2 my-4'>
                    <label className='has-text-primary has-text-weight-semibold is-size-5' htmlFor='email'>Email</label>
                    <input className='input is-primary is-medium' type='email' id='email' placeholder='Email' required></input>
                </div>

                <div className='password m-2 my-4'>
                    <label className='has-text-primary has-text-weight-semibold is-size-5' htmlFor='password'>Password</label>
                    <input className='input is-primary is-medium' type='password' id='password' placeholder='Password' required></input>
                    <p className='is-clickable is-size-7 has-text-grey m-2 mr-5' id='forgotPassword'>Forgot password?</p>
                </div>
            </div>

            {/* Login Button */}
            <div className='level my-5'>
                <div className='level-item'>
                    <button className='button is-primary is-medium my-5' style={{ width: '150px' }}>Login</button>
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

                {/* <div className='is-flex is-align-items-center'>
                    <hr style={{ width: "25%" }} id='hr'></hr>
                    <p className='is-align-content-center has-text-weight-light'> OR </p>
                    <hr style={{ width: "25%" }}></hr>
                </div> */}

                {/* Social Media Buttons */}
                <p className='buttons is-flex-direction-column is-align-content-center'>
                    <button className='button is-primary is-outlined' style={{ width: '225px', margin: '6px' }}>
                        <span className='icon is-small'>
                            <FaGoogle />
                        </span>
                        <span>Login with Google</span>
                    </button>

                    <button className='button is-primary is-outlined' style={{ width: '225px', margin: '6px' }}>
                        <span className='icon is-small'>
                            <FaFacebook />
                        </span>
                        <span>Login with Facebook</span>
                    </button>

                    <button className='button is-primary is-outlined' style={{ width: '225px', margin: '6px' }}>
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

        </div >
    )
};


export default LoginForm;


