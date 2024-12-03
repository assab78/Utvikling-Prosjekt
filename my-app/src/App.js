// src/App.js
import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import axios from 'axios';

const App = () => {
    const [journeys, setJourneys] = useState([]);

    const fetchJourneys = async ({ from, to }) => {
        try {
            const response = await axios.get('/api/search', {
                params: { from, to },
            });
            setJourneys(response.data);
        } catch (error) {
            console.error('Error fetching journeys:', error);
        }
    };

    return (
        <div>
            <h1>Travel Planner</h1>
            <SearchForm onSearch={fetchJourneys} />
            <Results journeys={journeys} />
        </div>
    );
};

export default App;