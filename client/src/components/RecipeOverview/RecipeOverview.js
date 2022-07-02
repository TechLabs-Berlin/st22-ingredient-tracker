import React from 'react';
import './RecipeOverview.css'

function RecipesOverview() {
    return (
        <div>
            <div className='mt-6'>
                <h1 className='is-size-3 is-size-4-mobile has-text-black-ter has-text-weight-semibold'>Recipe results for *Chicken*</h1>
            </div>
            {/* First Row */}
            <div className='columns mt-5'>

                <div className='column'>
                    <div className='card is-clickable'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt='recipe photo'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <p class="title is-4">Recipe Title</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className='card is-clickable'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt='recipe photo'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <p class="title is-4">Recipe Title</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className='card is-clickable'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt='recipe photo'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <p class="title is-4">Recipe Title</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className='card is-clickable'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt='recipe photo'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <p class="title is-4">Recipe Title</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className='columns'>

                <div className='column'>
                    <div className='card is-clickable'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt='recipe photo'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <p class="title is-4">Recipe Title</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className='card is-clickable'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt='recipe photo'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <p class="title is-4">Recipe Title</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className='card is-clickable'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt='recipe photo'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <p class="title is-4">Recipe Title</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className='card is-clickable'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt='recipe photo'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <p class="title is-4">Recipe Title</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thrid Row */}
            <div className='columns'>

                <div className='column'>
                    <div className='card is-clickable'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt='recipe photo'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <p class="title is-4">Recipe Title</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className='card is-clickable'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt='recipe photo'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <p class="title is-4">Recipe Title</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className='card is-clickable'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt='recipe photo'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <p class="title is-4">Recipe Title</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column mb-5'>
                    <div className='card is-clickable'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt='recipe photo'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <p class="title is-4">Recipe Title</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipesOverview;