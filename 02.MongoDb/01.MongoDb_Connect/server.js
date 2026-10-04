import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';
import 'dotenv/config.js';

const app = express();
const port = 3000;

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('how are you brother...');
})


//mongodb+srv://<db_username>:<db_password>@cluster0.mr1tjdh.mongodb.net/?appName=Cluster0

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Mongo Db Connected!')
    .catch(() => console.log('Mongo Db Not Connected'))
);



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});