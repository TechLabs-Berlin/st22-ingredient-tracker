import React from "react";
import GroceriesSearch from "../GroceriesSearch/GroceriesSearch";
import GroceriesList from "../GroceriesList/GroceriesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DemoData from '../DemoComponent/DemoComponent';

import RegistrationForm from "../RegistrationForm/RegistrationForm";
import HomepageInstructions from "../HomepageInstructions/HomepageInstructions";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<DemoData />} />
                    <Route path="registration" element={<RegistrationForm />} />
                    <Route path="groceries" element={<><GroceriesSearch /><GroceriesList /></>}></Route>
                    <Route path="instructions" element={<HomepageInstructions />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;