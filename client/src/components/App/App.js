import React from "react";
import DemoData from '../DemoComponent/DemoComponent';

import RegistrationForm from "../RegistrationForm/RegistrationForm";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function App() {
    return (
        <div className="App">
 
            <RegistrationForm />

            <Header />

            < DemoData />
            <Footer />
        </div>
    );
};

export default App;