import React, { useState, useEffect } from 'react';
import { getDemoData } from '../../API/demo.api';
import './DemoComponent.css';

const DemoData = () => {
    const [demo, setDemoData] = useState([]);

    useEffect( async () => {
        const response = await getDemoData();
        if (response != null) {
            console.log(response);
            setDemoData(response.data)
        }
    }, [])

    return (
        <div>
            <h3 className="has-text-weight-semibold is-size-5">Test demo component data - now connected through Firebase Functions and Express.js</h3>
            <ol>                
            {demo.map(d => {
                return <li>Name: {d.name}, Type: {d.type}</li>
            })}
            </ol>
        </div>
    )
};

export default DemoData;