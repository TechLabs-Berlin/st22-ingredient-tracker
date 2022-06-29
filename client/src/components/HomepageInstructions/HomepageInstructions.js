import React from 'react';
import './HomepageInstructions.css'

function HomepageInstructions() {
    return (
        <div className='columns is-mobile is-vcentered' id='instructions'>
            <div className='column'>
                {/* Number 1 */}
                <div className='block'>
                    <span class='tag is-primary is-large is-size-4 is-size-5-mobile has-text-weight-bold is-rounded mr-2'>1</span>
                    <p className='is-inline-block subtitle is-size-4 is-size-5-mobile has-text-weight-medium'>Add the ingredients you want to use.</p>
                </div>

                {/* Number 2 */}
                <div className='block'>
                    <span class='tag is-primary is-large is-size-4 is-size-5-mobile has-text-weight-bold is-rounded mr-2'>2</span>
                    <p className='is-inline-block subtitle is-size-4 is-size-5-mobile has-text-weight-medium'>Select a recipe from the suggestions.</p>
                </div>

                {/* Number 3 */}
                <div className='block'>
                    <span class='tag is-primary is-large is-size-4 is-size-5-mobile has-text-weight-bold is-rounded mr-2'>3</span>
                    <p className='is-inline-block subtitle is-size-4 is-size-5-mobile has-text-weight-medium'>Save the recipe to your favourites.</p>
                </div>
            </div>

            <div className='column'>
                {/* Number 1 */}
                <div className='block' id='steps'>
                    <button className='button is-static is-rounded is-medium has-text-weight-bold has-text-primary is-size-4 is-size-5-mobile mr-2'>Step 1</button>
                    <p className='is-inline-block subtitle is-size-4 is-size-5-mobile has-text-weight-medium'>Add the ingredients you want to use.</p>
                </div>

                {/* Number 2 */}
                <div className='block' id='steps'>
                    <button className='button is-static is-rounded is-medium has-text-weight-bold has-text-primary is-size-4 is-size-5-mobile mr-2'>Step 2</button>
                    <p className='is-inline-block subtitle is-size-4 is-size-5-mobile has-text-weight-medium'>Select a recipe from the suggestions.</p>
                </div>

                {/* Number 3 */}
                <div className='block' id='steps'>
                    <button className='button is-static is-rounded is-medium has-text-weight-bold has-text-primary is-size-4 is-size-5-mobile mr-2'>Step 3</button>
                    <p className='is-inline-block subtitle is-size-4 is-size-5-mobile has-text-weight-medium'>Save the recipe to your favourites.</p>
                </div>
            </div>
        </div >


    )
}

export default HomepageInstructions;