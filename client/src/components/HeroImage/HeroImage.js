import React from 'react';
import './HeroImage.css'

function HeroImage() {
    return (
        <div>
            {/* Hero Image and Button */}
            <section className="hero is-large">
                <div className="hero-body">
                    <div>
                        <p className="title is-size-1 is-size-3-mobile has-text-primary has-text-weight-bold my-5">
                            Manage your pantry better!
                        </p>
                        <p className="is-size-4 is-size-5-mobile has-text-white mb-6">
                            Ingreduce helps you reduce waste by providing healthy recipes using the ingredients you already have.
                        </p>
                        <button className='button is-primary has-text-weight-semibold my-5 is-size-5' style={{ width: '150px' }}>Try Today</button>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default HeroImage;