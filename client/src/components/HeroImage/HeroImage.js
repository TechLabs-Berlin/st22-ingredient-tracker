import React from 'react';
import './HeroImage.css'

function HeroImage() {
    function handleSubmit(event) {
        event.preventDefault();
    };

    return (
        <div>
            {/* Hero Image */}
            <section className="hero is-large">
                <div className="hero-body">
                    <div>
                        {/* Title & Subtitle */}
                        <p className="title is-size-1 is-size-2-mobile has-text-primary has-text-weight-bold my-5">
                            Manage your pantry better!
                        </p>
                        <p className="is-size-4 is-size-5-mobile has-text-white mb-6">
                            Ingreduce helps you reduce waste by providing healthy recipes using the ingredients you already have.
                        </p>

                        {/* Button */}
                        <div id='btn'>
                            <button className='button is-primary has-text-weight-semibold my-5 is-size-5 is-size-6-mobile' style={{ width: '150px' }} type='submit'>Try Today</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
};

export default HeroImage;