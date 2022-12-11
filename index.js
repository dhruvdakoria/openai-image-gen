const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();

// Enable body parser - middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder as public - frontend setup middleware
app.use(express.static(path.join(__dirname,'public')));

// Routes
app.use('/openai', require('./routes/openaiRoutes'));

// Start listing on port 8000
app.listen(port,() => console.log(`Server started on port ${port}`));