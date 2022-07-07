import React from "react";
import HeroImage from "../HeroImage/HeroImage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DemoData from '../DemoComponent/DemoComponent';

import RegistrationForm from "../RegistrationForm/RegistrationForm";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RecipeDetail from "../RecipeDetail/RecipeDetail";
import Groceries from "../Groceries/Groceries";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<HeroImage />}/>
                        <Route path="registration" element={<RegistrationForm />}/>
                        <Route path="groceries" element={<><Groceries/></>}></Route>
                        <Route path="recipe_detail" element={<RecipeDetail />}/>
                    </Routes>
                    <br></br>
                    <br></br>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;