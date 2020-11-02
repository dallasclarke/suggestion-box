const mongoose = require('mongoose');
const Suggestions = require('./models/Suggestions');
const suggestionSeed = require('./suggestions.json');
require('dotenv').config();

const seedFunc = async () => {
    try {
        const data = await Suggestions.create(suggestionSeed);
        console.log(`${data.length} records created!`);

        await mongoose.disconnect();
        console.log('MongoDB disconnected');

        process.exit(0);
    }
    catch(err) {
        console.error(err);
        process.exit(1);
    }
};

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log('MongoDB Connected');
        mongoose.connection.db.dropDatabase();
    })
    .then(() => {
        seedFunc();
    })
    .catch((err) => console.log(`MongoDB Error: ${err}`));