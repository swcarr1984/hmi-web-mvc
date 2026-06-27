const express = require('express');
const path = require('path');
const deviceController = require('./controllers/deviceController');

const app = express();
const PORT = 3000;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', deviceController.renderDashboard);

// Start server
app.listen(PORT, () => {
    console.log(`HMI Web MVC running at http://localhost:${PORT}`);
});
