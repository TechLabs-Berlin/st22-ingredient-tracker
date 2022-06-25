import React from 'react';
import './HeroImage.css'

function HeroImage() {
    return (
        <div>
            {/* Hero Image and Button */}
            <section className="hero is-large">
                <div className="hero-body">
                    <div>
                        <p className="title is-size-1 is-size-3-mobile has-text-white has-text-weight-bold mb-4">
                            Manage your pantry better!
                        </p>
                        <p className="is-size-4 is-size-5-mobile has-text-white mb-6">
                            Ingreduce helps you reduce waste by providing healthy recipes using the ingredients you already have.
                        </p>
                        <button className='button is-primary has-text-weight-semibold my-5 is-size-5' style={{ width: '150px' }}>Try Today</button>
                    </div>
                </div>
            </section>

            {/*Instructions */}
            {/* <section className=''>
                <div className='hero-body'>

                    <div>
                        <p className='is-inline-block is-size-3 has-text-primary has-text-weight-bold'>1.</p>
                        <p className='is-inline-block is-size-5 has-text-weight-normal ml-2'>Add the ingredients you want to use.</p>
                    </div>

                    <div>
                        <p className='is-inline-block is-size-3 has-text-primary has-text-weight-bold'>2.</p>
                        <p className='is-inline-block is-size-5 has-text-weight-normal ml-2'>Select a recipe to cook.</p>
                    </div>

                    <div>
                        <p className='is-inline-block is-size-3 has-text-primary has-text-weight-bold'>3.</p>
                        <p className='is-inline-block is-size-5 has-text-weight-normal ml-2'>Reduce your food waste!</p>
                    </div>

                </div>
            </section> */}
        </div>
    )
};

export default HeroImage;