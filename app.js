const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 3000;
const suggestionRoutes = require('./routes/suggestionRoutes');

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected!'))
    .catch((err) => console.log(`${err}`));

    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use('/api/v1/suggestions', suggestionRoutes);


    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });