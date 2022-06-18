import React from "react";
import DemoData from '../DemoComponent';

import RegistrationForm from "../RegistrationForm/RegistrationForm";

import Header from "../Header/Header";


function App() {
    return (
        <div className="App">
 
            <DemoData />
            <RegistrationForm />

            <Header />
            < DemoData />

        </div>
    );
};

export default App;