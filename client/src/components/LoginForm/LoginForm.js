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
                <button className='button is-primary is-medium m-2 my-4'>Login</button>
            </div>


            {/* Social Media Buttons */}
            <div className='socials m-4 my-4'>
                <p className='subtitle has-text-weight-light'>Or Login Using:</p>
                <p className='buttons'>
                    <button className='button is-primary is-outlined'>
                        <span className='icon is-small'>
                            <FaGoogle />
                        </span>
                    </button>

                    <button className='button is-primary is-outlined'>
                        <span className='icon is-small'>
                            <FaFacebook />
                        </span>
                    </button>

                    <button className='button is-primary is-outlined'>
                        <span className='icon is-small'>
                            <FaTwitter />
                        </span>
                    </button>
                </p>
            </div>

            {/* Registration Link */}
            <div className='is-flex is-align-content-flex-start m-4 mb-4 mt-6'>
                <p>Not a member yet?</p>
                <p className='is-clickable has-text-primary ml-1'>Register here.</p>
            </div>
        </div>
    )
};


export default LoginForm;


