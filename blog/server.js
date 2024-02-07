const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process?.env?.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define the path for views

app.use(express.static('public'));

// Route for the homepage
app.get('/', (req, res) => {
    res.render('index.ejs')
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
