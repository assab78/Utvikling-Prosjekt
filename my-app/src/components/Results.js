// src/components/Results.js
import React from 'react';

const Results = ({ journeys }) => (
    <div>
        <h2>Travel Options</h2>
        <ul>
            {journeys.map((journey, index) => (
                <li key={index}>
                    <p>Route: {journey.route}</p>
                    <p>Departure: {journey.departureTime}</p>
                    <p>Duration: {journey.duration}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default Results;