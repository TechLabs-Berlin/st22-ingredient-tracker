import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';


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
        <div className=" form card m-4 p-4">

            <h1 className="title m-2 has-text-primary">Registration Form</h1>
            <h2 className=" m-2 mb-5">Register to save ingredients and recipes to your Ingreduce dashboard.</h2>

            <div>
                <div className="username m-2">
                    <label className="form__label has-text-primary has-text-weight-semibold is-size-5" htmlFor="username">Username</label>
                    <input className="input is-primary is-medium" type="text" value={username} onChange={(e) => handleInputChange(e)} id="username" placeholder="Username" required />
                </div>

                <div className="email m-2 my-4">
                    <label className="form__label has-text-primary has-text-weight-semibold is-size-5" htmlFor="email">Email </label>
                    <input className="input is-primary is-medium" type="email" id="email" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" required />
                </div>

                <div className="password m-2 my-4">
                    <label className="form__label has-text-primary has-text-weight-semibold is-size-5" htmlFor="password">Password </label>
                    <input className="input is-primary is-medium" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" required />
                </div>

                <div className="confirm-password m-2 my-4">
                    <label className="form__label has-text-primary has-text-weight-semibold is-size-5" htmlFor="confirmPassword">Confirm Password </label>
                    <input className="input is-primary is-medium" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" required />
                </div>
            </div>

            <div className=''>
                {/* <h3 className="is-size-6 m-2 mt-5 has-text-weight-medium has-text-grey">Terms & Conditions</h3> */}
                <input className="m-2" type="checkbox" id="tac" onChange={(e) => handleInputChange(e)}></input>
                <label className="checkbox m-2 mb-4 has-text-grey" for="tac">I agree with the Terms & Conditions.</label>

            </div>

            <div className='level'>
                <div className='level-item'>
                    <button disabled={!termsAccepted} onClick={() => handleSubmit()} type="submit" className='button is-primary is-medium my-5' style={{ width: '150px' }}>Register</button>
                </div>
            </div>

        </div>

    )
};

export default RegistrationForm;

