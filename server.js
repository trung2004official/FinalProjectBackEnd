import express from 'express';
import dotenv from 'dotenv';
import sequelize from './src/config/sequelize.js';
import User from './src/models/user.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

sequelize.sync({ alter: true })
    .then(() => console.log('DB synced with Sequelize'))
    .catch((err) => console.error(`Sequelize sync error: ${err}`));

// app.use('/api/auth', )
//start server
app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
});