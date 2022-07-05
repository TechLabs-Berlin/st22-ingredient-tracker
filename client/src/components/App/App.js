import React from "react";
import HeroImage from "../HeroImage/HeroImage";
import GroceriesSearch from "../GroceriesSearch/GroceriesSearch";
import GroceriesList from "../GroceriesList/GroceriesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DemoData from '../DemoComponent/DemoComponent';

import RegistrationForm from "../RegistrationForm/RegistrationForm";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
    return (
        <div className="App">
            <DemoData />
            <HeroImage />
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<DemoData />} />
                        <Route path="registration" element={<RegistrationForm />} />
                        <Route path="groceries" element={<><GroceriesSearch /><GroceriesList /></>}></Route>
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>

    );
};

export default App;