import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DemoData from '../DemoComponent/DemoComponent';

import RegistrationForm from "../RegistrationForm/RegistrationForm";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<DemoData />}/>
                        <Route path="registration" element={<RegistrationForm />}/>
                    </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;