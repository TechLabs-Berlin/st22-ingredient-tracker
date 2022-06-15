import React from 'react';
import './HeroImage.css'
// import './photo_veggies.jpg'

function HeroImage() {

    return (
        <div>
            {/* Hero Image and Button */}
            <section className="hero is-large">
                <div className="hero-body">
                    <div>
                        <p className="title is-size-2 has-text-white mb-5">
                            Manage your pantry better!
                        </p>
                        <p className="subtitle has-text-white mb-6">
                            Ingreduce helps you reduce waste by providing healthy recipes using the ingredients you already have.
                        </p>
                        <button className='button is-primary' style={{ width: '150px' }}>Try Today</button>
                    </div>
                </div>
            </section>

            {/*Instructions */}
            {/* <div class="columns is-flex">
                <div class="column"></div>
                <div class="column">
                    Second column
                </div>

                <div class="column">
                    <ol>
                        <li className='is-size-5'>Add ingredients you want to use.</li>
                        <li className='is-size-5'>Select a recipe to cook.</li>
                        <li className='is-size-5'>Reduce your food waste!</li>
                    </ol>


                    <p className='is-size-3 has-text-primary has-text-weight-bold is-inline-flex'>1.</p>
                    <p className='is-size-5 has-text-weight-light my-5'>Add the ingredients you want to use.</p>
                    <p className='is-size-3 has-text-primary has-text-weight-bold'>2.</p>
                    <p className='is-size-5 has-text-weight-light my-5'>Select a recipe to cook.</p>
                    <p className='is-size-3 has-text-primary has-text-weight-bold'>3.</p>
                    <p className='is-size-5 has-text-weight-light my-5'>Reduce your food waste!</p>
                </div>

                <div class="column"></div>
            </div> */}

            <div className='container' id='ingredient_list'>
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


        </div>
    )
};

export default HeroImage;