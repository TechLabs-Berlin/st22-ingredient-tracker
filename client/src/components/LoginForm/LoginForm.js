import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


function LoginForm() {

    return (
        <div className='form card card m-4 p-4'>
            {/* Title */}
            <h1 className='title m-2 mb-5 has-text-primary'>Login</h1>

            {/* Input Fields */}
            <div>
                <div className='email m-2 my-4'>
                    <label className='has-text-primary has-text-weight-semibold is-size-5' htmlFor='email'>Email</label>
                    <input className='input is-primary is-medium' type='email' id='email' placeholder='Email' required></input>
                </div>

                <div className='password m-2 my-4'>
                    <label className='has-text-primary has-text-weight-semibold is-size-5' htmlFor='password'>Password</label>
                    <input className='input is-primary is-medium' type='password' id='password' placeholder='Password' required></input>
                    <p className='is-clickable is-size-7 has-text-grey is-pulled-right m-1 mb-4'>Forgot password?</p>
                </div>
            </div>

            {/* Login Button */}
            <div>
                <button className='button is-primary is-medium m-2 my-5'>Login</button>
            </div>


            {/* Social Media Buttons */}
            <div className='socials m-4 my-4'>

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

                <p className='buttons is-flex-direction-column is-align-content-center'>
                    <button className='button is-primary is-outlined' style={{ width: '202px', margin: '6px' }}>
                        <span className='icon is-small'>
                            <FaGoogle />
                        </span>
                        <span>Login with Google</span>
                    </button>

                    <button className='button is-primary is-outlined' style={{ width: '202px', margin: '6px' }}>
                        <span className='icon is-small'>
                            <FaFacebook />
                        </span>
                        <span>Login with Facebook</span>
                    </button>

                    <button className='button is-primary is-outlined' style={{ width: '202px', margin: '6px' }}>
                        <span className='icon is-small'>
                            <FaTwitter />
                        </span>
                        <span>Login with Twitter</span>
                    </button>
                </p>

            </div>

            {/* Registration Link */}
            <div className='is-flex is-align-content-flex-start m-4 mb-4 mt-6'>
                <p>Not a member yet?</p>
                <p className='is-clickable has-text-primary ml-1'>Register here.</p>
            </div>
        </div >
    )
};


export default LoginForm;


