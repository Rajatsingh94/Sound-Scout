// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define the port you want to listen to
const port = 3001;

// Temporary array of cars
const cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
    { id: 2, brand: 'Honda', model: 'Civic', year: 2021 },
    { id: 3, brand: 'Tesla', model: 'Model 3', year: 2022 },
    // Add more cars here...
];

// Route to get the list of cars
app.get('/cars', (req, res) => {
    res.json(cars);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});