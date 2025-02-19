const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const authRoutes = require('./Router/routes')


//Middleware
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`); 
})