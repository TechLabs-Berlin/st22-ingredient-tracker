import React from 'react';
import './HomepageInstructions.css'

function HomepageInstructions() {
    return (
        <div className='columns is-mobile is-vcentered' id='instructions'>
            {/* <div className='column'></div> */}
            <div className='column'>
                {/* Number 1 */}
                <div className='block'>
                    <span class='tag is-primary is-large is-size-4 has-text-weight-bold is-rounded mr-2'>1</span>
                    <p className='is-inline-block subtitle is-size-4 has-text-weight-medium'>Add the ingredients you want to use.</p>
                </div>

                {/* Number 2 */}
                <div className='block'>
                    <span class='tag is-primary is-large is-size-4 has-text-weight-bold is-rounded mr-2'>2</span>
                    <p className='is-inline-block subtitle is-size-4 has-text-weight-medium'>Select a recipe from the suggestions.</p>
                </div>

                {/* Number 3 */}
                <div className='block'>
                    <span class='tag is-primary is-large is-size-4 has-text-weight-bold is-rounded mr-2'>3</span>
                    <p className='is-inline-block subtitle is-size-4 has-text-weight-medium'>Save the recipe to your favourites.</p>
                </div>
            </div>
            {/* <div className='column'></div> */}
        </div >
    )
}

export default HomepageInstructions;