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
                <HomepageInstructions />
                <Routes>
                    <Route path="registration" element={<RegistrationForm />} />
                    <Route path="groceries" element={<><GroceriesSearch /><GroceriesList /></>}></Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;