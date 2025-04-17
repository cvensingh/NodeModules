// Importing the express module
const express = require('express');
const app = express();

// Define a port
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Example POST route
app.post('/data', (req, res) => {
  const receivedData = req.body;
  res.send(`You sent: ${JSON.stringify(receivedData)}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});