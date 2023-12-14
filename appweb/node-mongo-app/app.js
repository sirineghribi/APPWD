const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const reservationRoutes = require('./src/controllers/ReservationController');
const eurekaClient = require('./src/config/eureka-client'); 

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/node-mongo-app', { useNewUrlParser: true});

// Middleware
app.use(bodyParser.json());

// Use reservation routes
app.use('/api', reservationRoutes);


// Routes setup (to be added later)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});