
// Create a separate folder for the backend

// backend/server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;

app.get('/api/search', async (req, res) => {
    const { from, to } = req.query;

    try {
        const enturResponse = await axios.get('https://api.entur.io/journey-planner/v2/graphql', {
            headers: { 'ET-Client-Name': 'your-application-name' },
            data: {
                query: `{
                    trip(from: {name: "${from}"}, to: {name: "${to}"}) {
                        legs {
                            line {
                                publicCode
                            }
                            expectedStartTime
                            expectedEndTime
                        }
                    }
                }`,
            },
        });

        const journeys = enturResponse.data.data.trip.legs.map((leg) => ({
            route: leg.line.publicCode,
            departureTime: leg.expectedStartTime,
            duration: new Date(leg.expectedEndTime) - new Date(leg.expectedStartTime),
        }));

        res.json(journeys);
    } catch (error) {
        console.error('Error querying Entur API:', error);
        res.status(500).send('Error fetching travel data');
    }
});

app.listen(PORT, () => {
    console.log(`Backend API running on http://localhost:${PORT}`);
});

// Step 4: Run the application
// 1. Start the backend server: `node server.js`
// 2. Start the React frontend: `npm start`