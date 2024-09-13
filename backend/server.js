import express from 'express';
import mongoose from 'mongoose';
import demoRoute from './routes/demoRoute.js';
import dependencyRoute from './routes/mockRoute.js';
import cors from 'cors';

mongoose.connect("mongodb://localhost:27017/demoDB");

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/detail', demoRoute);
app.use('/api/dependency', dependencyRoute);

app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>');
});

app.listen(4000, () => {
    console.log('Server running on port 4000');
});