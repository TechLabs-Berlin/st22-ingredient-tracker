import React from "react";
import DemoData from '../DemoComponent/DemoComponent';

import SignUp from "../RegistrationForm/RegistrationForm";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function App() {
    return (
        <div className="App">
 
            <SignUp />

            <Header />

            < DemoData />
            <Footer />
        </div>
    );
};

export default App;