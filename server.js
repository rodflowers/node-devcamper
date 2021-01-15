const path = require('path');
const express = require("express");
const dotenv = require("dotenv");
//const logger = require('./middleware/logger')
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');
const errorHandler = require("./middleware/error");
const fileupload = require('express-fileupload');


// Load env vars
dotenv.config({ path: "./config.env" });

// Connect to database
connectDB();


//Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');


const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// app.use(logger);

// File upload middleware
app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Mount routers
app.use('/api/v1/bootcamps', bootcamps)
app.use('/api/v1/courses', courses)

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

// Handle unhandled rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message.red}`);
    // Close server & exit
    server.close(() => process.exit(1));
});
