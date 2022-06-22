import React from "react";
import GroceriesSearch from "../GroceriesSearch/GroceriesSearch";
import GroceriesList from "../GroceriesList/GroceriesList";
import DemoData from '../DemoComponent/DemoComponent';

import RegistrationForm from "../RegistrationForm/RegistrationForm";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function App() {
    return (
        <div className="App">
 
            <RegistrationForm />

            <Header />
            <GroceriesList />
            <GroceriesSearch />

            < DemoData />
            <Footer />
        </div>
    );
};

export default App;