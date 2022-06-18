import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import './RegistrationForm.css'

function RegistrationForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "username") {
            setUsername(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }
        if (id === "tac") {
            setTermsAccepted(!termsAccepted);
        }
    }

    const handleSubmit = () => {
        console.log(username, email, password, confirmPassword);
    }


    return (
        <div className='columns' id="registrationForm">
            <div className="form card m-4 p-4">

                {/* Title and Subtitle */}
                <h1 className="title m-2 has-text-primary">Registration Form</h1>
                <h2 className=" m-2 mb-5">Register to save ingredients and recipes to your Ingreduce dashboard.</h2>

                {/* Input Fields */}
                <div>
                    <div className="username m-2">
                        <label className="has-text-primary has-text-weight-semibold is-size-5" htmlFor="username">Username</label>
                        <input className="input is-primary is-medium" type="text" value={username} onChange={(e) => handleInputChange(e)} id="username" placeholder="Username" required />
                    </div>

                    <div className="email m-2 my-4">
                        <label className="has-text-primary has-text-weight-semibold is-size-5" htmlFor="email">Email </label>
                        <input className="input is-primary is-medium" type="email" id="email" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" required />
                    </div>

                    <div className="password m-2 my-4">
                        <label className="has-text-primary has-text-weight-semibold is-size-5" htmlFor="password">Password </label>
                        <input className="input is-primary is-medium" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" required />
                    </div>

                    <div className="confirm-password m-2 my-4">
                        <label className="has-text-primary has-text-weight-semibold is-size-5" htmlFor="confirmPassword">Confirm Password </label>
                        <input className="input is-primary is-medium" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" required />
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
                            <span>Register with Google</span>
                        </button>

                        <button className='button is-primary is-outlined is-rounded' style={{ width: '225px', margin: '6px' }}>
                            <span className='icon is-small'>
                                <FaFacebook />
                            </span>
                            <span>Register with Facebook</span>
                        </button>

                        <button className='button is-primary is-outlined is-rounded' style={{ width: '225px', margin: '6px' }}>
                            <span className='icon is-small'>
                                <FaTwitter />
                            </span>
                            <span>Register with Twitter</span>
                        </button>
                    </p>
                </div>

                {/* Terms and Conditions */}
                < div className='' >
                    {/* <h3 className="is-size-6 m-2 mt-5 has-text-weight-medium has-text-grey">Terms & Conditions</h3> */}
                    < input className="m-2" type="checkbox" id="tac" onChange={(e) => handleInputChange(e)
                    }></input >
                    <label className="checkbox m-2 mb-4 has-text-grey" for="tac">I agree with the Terms & Conditions.</label>

                </div >

                {/* Register Button */}
                < div className='level' >
                    <div className='level-item'>
                        <button disabled={!termsAccepted} onClick={() => handleSubmit()} type="submit" className='button is-primary is-medium my-5' style={{ width: '150px' }}>Register</button>
                    </div>
                </div >
            </div >
        </div >

    )
};

export default RegistrationForm;

