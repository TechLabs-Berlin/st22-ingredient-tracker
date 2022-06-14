import React from 'react';
import './HeroImage.css'
// import './photo_veggies.jpg'

function HeroImage() {

    return (
        <section className="hero is-success is-halfheight">
            <div className="hero-body">
                <div className="">
                    {/* <img src={require('./photo_veggies.jpg')} /> */}
                    <p className="title">
                        Ingreduce helps you reduce waste by providing healthy recipes using the ingredients you already have.
                    </p>
                    <button className='button'>Try Today</button>
                </div>
            </div>
        </section>
    )
};

export default HeroImage;