import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ from, to });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>From:</label>
                <input
                    type="text"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="Enter starting point"
                />
            </div>
            <div>
                <label>To:</label>
                <input
                    type="text"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="Enter destination"
                />
            </div>
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;






