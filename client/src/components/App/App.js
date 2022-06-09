import React from "react";
import DemoData from '../DemoComponent';
import LoginForm from '../LoginForm/LoginForm'

function App() {
    return (
        <div className="App">
            <h1>Ingredient Tracker Landing Page</h1>
            < DemoData />
            <LoginForm />
        </div>
    );
};

export default App;