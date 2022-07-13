import React, { useState, useEffect } from 'react';
import { getDemoData } from '../API/demo.api';

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
            <ol>
            {demo.map(d => {
                return <li>Name: {d.name}, Type: {d.type}</li>
            })}
            </ol>
        </div>
    )
};

export default DemoData;