import React from "react";
import DemoData from '../DemoComponent';
import RegistrationForm from "../RegistrationForm/RegistrationForm";

function App() {
    return (
        <div className="App">
            <h1>Ingredient Tracker Landing Page</h1>
            < DemoData />
            <RegistrationForm />
        </div>
    );
};

export default App;