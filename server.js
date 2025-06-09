import express from 'express';
import dotenv from 'dotenv';
import sequelize from './src/config/sequelize.js';
import authRoute from './src/routes/authRoutes.js'; 

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/auth', authRoute);

sequelize.sync({ alter: true })
    .then(() => console.log('DB synced with Sequelize'))
    .catch((err) => console.error(`Sequelize sync error: ${err}`));

//start server
app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
});