import React from 'react';
import './RecipeOverview.css'

function RecipesOverview() {
    return (
        <div>
            <div className='mt-6'>
                <h1 className='is-size-3 is-size-4-mobile has-text-weight-semibold has-text-primary'>Recipe results for *Chicken*</h1>
            </div>
            {/* First Row */}
            <div className='columns mt-5'>

                <div className='column'>
                    <div className='card is-clickable' id='card'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src='https://bulma.io/images/placeholders/1280x960.png' alt='recipe photo' id='image'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media-content has-text-left'>
                                <p class="title is-4 has-text-primary">Recipe Title</p>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <p className='card-footer-item'>Prep Time: 10 min</p>
                            <p className='card-footer-item'>Cook Time: 30 min</p>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className='card is-clickable' id='card'>
                        <div className='card-image' id='card-image'>
                            <figure className='image' >
                                <img src='https://bulma.io/images/placeholders/1280x960.png' alt='recipe photo' id='image'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media-content has-text-left'>
                                <p class="title is-4 has-text-primary">Recipe Title</p>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <p className='card-footer-item'>Prep Time: 10 min</p>
                            <p className='card-footer-item'>Cook Time: 30 min</p>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className='card is-clickable' id='card'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src='https://bulma.io/images/placeholders/1280x960.png' alt='recipe photo' id='image-top'></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <p class="title is-4 has-text-primary">Recipe Title</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className='card is-clickable'>
                        <div className='card-image'>
                            <figure className='image'>
                                <img src='https://bulma.io/images/placeholders/1280x960.png' alt='recipe photo'></img>
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
                                <img src='https://bulma.io/images/placeholders/1280x960.png' alt='recipe photo'></img>
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
                                <img src='https://bulma.io/images/placeholders/1280x960.png' alt='recipe photo'></img>
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
                                <img src='https://bulma.io/images/placeholders/1280x960.png' alt='recipe photo'></img>
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
                                <img src='https://bulma.io/images/placeholders/1280x960.png' alt='recipe photo'></img>
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
                                <img src='https://bulma.io/images/placeholders/1280x960.png' alt='recipe photo'></img>
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
                                <img src='https://bulma.io/images/placeholders/1280x960.png' alt='recipe photo'></img>
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
                                <img src='https://bulma.io/images/placeholders/1280x960.png' alt='recipe photo'></img>
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
                                <img src='https://bulma.io/images/placeholders/1280x960.png' alt='recipe photo'></img>
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