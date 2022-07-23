import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";
import HomepageInstructions from "../HomepageInstructions/HomepageInstructions";
import RecipeOverview from "../RecipeOverview/RecipeOverview";
import HeroImage from "../HeroImage/HeroImage";
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
                        <Route path="/" element={<><HeroImage /><HomepageInstructions/></>}/>
                        <Route path="login" element={<LoginForm />}/>
                        <Route path="registration" element={<RegistrationForm />}/>
                        <Route path="groceries" element={<Groceries/>}></Route>
                        <Route path="recipe_overview" element={<RecipeOverview />}/>
                        <Route path="recipe_detail" element={<RecipeDetail />}/>
                    </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;