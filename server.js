require('dotenv').config();
const { PORT = 3001, DATABASE_URL } = process.env;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const indexController = require('./controllers/index');

mongoose.connect(DATABASE_URL);
mongoose.connection
    .on("open", () => console.log("Congrats, you're connected to MongoDB!"))
    .on("close", () => console.log("You are now disconnected from MongoDB"))
    .on("error", (error) => console.log(error));

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.listen(PORT, () => console.log(`Stalking you on port: ${PORT}`))