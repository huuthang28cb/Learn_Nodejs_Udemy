const http = require('http');
// import mongoose
const mongoose = require('mongoose');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

// connect database
const MONGO_URL = "mongodb+srv://vohuuthang_admin:19022000az@cluster0.ob30z.mongodb.net/NASA_Project?retryWrites=true&w=majority"

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});
mongoose.connection.once('error', (err) => {
    console.error(err);
});

async function startServer() {
    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Lissten on port ${PORT}...`);
    })

}

startServer();