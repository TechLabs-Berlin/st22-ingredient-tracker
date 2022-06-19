import React from "react";
import DemoData from '../DemoComponent';

import RegistrationForm from "../RegistrationForm/RegistrationForm";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function App() {
    return (
        <div className="App">
 
            <DemoData />
            <RegistrationForm />

            <Header />
            < DemoData />
            <Footer />
        </div>
    );
};

export default App;