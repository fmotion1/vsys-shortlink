const express = require('express');
const connectDB = require('./database');
const urlRoutes = require('./routes/urls');

// Create Express app
const app = express();
app.use(express.json());
// app.set('base', '/');
app.use('/api/url', urlRoutes);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Connect to the database
connectDB();

// Basic route
app.get('/', (req, res) => {
    res.render('index');
});

// Define PORT
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

