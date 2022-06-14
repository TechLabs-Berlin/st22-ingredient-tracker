import React from 'react';
import './HeroImage.css'
// import './photo_veggies.jpg'

function HeroImage() {

    return (
        <section className="hero is-halfheight">
            <div className="hero-body">
                <div className="">
                    {/* <img src={require('./photo_veggies.jpg')} /> */}
                    <p className="title has-text-white">
                        Manage your pantry better!
                    </p>
                    <p className="subtitle has-text-white">
                        Ingreduce helps you reduce waste by providing healthy recipes using the ingredients you already have.
                    </p>
                    <button className='button is-primary'>Try Today</button>
                </div>
            </div>
        </section>
    )
};

export default HeroImage;