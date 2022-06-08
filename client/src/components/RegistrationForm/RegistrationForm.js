import React, { useState } from 'react';


function RegistrationForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
    }

    const handleSubmit = () => {
        console.log(username, email, password, confirmPassword);
    }


    return (
        <div className="card is-flex-direction-column m-4 p-4 is-justify-content-center">

            <h1 className="title m-2 has-text-primary">Registration Form</h1>
            <h2 className="subtitle m-2 mb-6">Register to save recipes.</h2>

            <div>
                <div className="username m-2">
                    <label className="form__label has-text-primary has-text-weight-semibold is-size-5" htmlFor="username">Username</label>
                    <input className="input is-primary is-medium" type="text" value={username} onChange={(e) => handleInputChange(e)} id="username" placeholder="Username" />
                </div>

                <div className="email m-2 my-4">
                    <label className="form__label has-text-primary has-text-weight-semibold is-size-5" htmlFor="email">Email </label>
                    <input className="input is-primary is-medium" type="email" id="email" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                </div>

                <div className="password m-2 my-4">
                    <label className="form__label has-text-primary has-text-weight-semibold is-size-5" htmlFor="password">Password </label>
                    <input className="input is-primary is-medium" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                </div>

                <div className="confirm-password m-2 my-4">
                    <label className="form__label has-text-primary has-text-weight-semibold is-size-5" htmlFor="confirmPassword">Confirm Password </label>
                    <input className="input is-primary is-medium" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />
                </div>
            </div>

            <div>
                <h3 className="is-size-6 m-2 my-5 has-text-weight-medium has-text-grey">Terms & Conditions</h3>
                <input type="checkbox" id="tac"></input>
                <label className="checkbox" for="tac">Terms & Conditions</label>

            </div>

            <div>
                <button onClick={() => handleSubmit()} type="submit" className="button is-primary is-medium m-2 my-4">Register</button>
            </div>

        </div>




        // Google's Material Design 
        // <div className="mdc-card">
        //     <div className='form'>
        //         <div className='form-body'>
        //             <div className='username'>
        //                 <label className="mdc-text-field mdc-text-field--outlined">
        //                     <span className="mdc-notched-outline">
        //                         <span className="mdc-notched-outline__leading"></span>
        //                         <span className="mdc-notched-outline__notch">
        //                             <span className="mdc-floating-label" id="my-label-id">Username</span>
        //                         </span>
        //                         <span className="mdc-notched-outline__trailing"></span>
        //                     </span>
        //                     <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
        //                 </label>
        //             </div>

        //             <div className='email'>
        //                 <label className="mdc-text-field mdc-text-field--outlined">
        //                     <span className="mdc-notched-outline">
        //                         <span className="mdc-notched-outline__leading"></span>
        //                         <span className="mdc-notched-outline__notch">
        //                             <span className="mdc-floating-label" id="my-label-id">Email</span>
        //                         </span>
        //                         <span className="mdc-notched-outline__trailing"></span>
        //                     </span>
        //                     <input type="email" className="mdc-text-field__input" aria-labelledby="my-label-id" value={email} onChange={(e) => handleInputChange(e)} />
        //                 </label>
        //             </div>

        //             <div className='password'>
        //                 <label className="mdc-text-field mdc-text-field--outlined">
        //                     <span className="mdc-notched-outline">
        //                         <span className="mdc-notched-outline__leading"></span>
        //                         <span className="mdc-notched-outline__notch">
        //                             <span className="mdc-floating-label" id="my-label-id">Password</span>
        //                         </span>
        //                         <span className="mdc-notched-outline__trailing"></span>
        //                     </span>
        //                     <input type="password" className="mdc-text-field__input" aria-labelledby="my-label-id" />
        //                 </label>
        //             </div>

        //             <div className='confirm-password'>
        //                 <label className="mdc-text-field mdc-text-field--outlined">
        //                     <span className="mdc-notched-outline">
        //                         <span className="mdc-notched-outline__leading"></span>
        //                         <span className="mdc-notched-outline__notch">
        //                             <span className="mdc-floating-label" id="my-label-id">Confirm Password</span>
        //                         </span>
        //                         <span className="mdc-notched-outline__trailing"></span>
        //                     </span>
        //                     <input type="password" className="mdc-text-field__input" aria-labelledby="my-label-id" />
        //                 </label>
        //             </div>

        //             <button className="mdc-button mdc-button--raised">
        //                 <span className="mdc-button__label">Register</span>
        //             </button>

        //         </div>
        //     </div>
        // </div>
    )
};

export default RegistrationForm;

