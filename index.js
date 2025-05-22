const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get('/api', (req, res) => {
    res.json({message: 'Hello Trung'});
});

//start server
app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
});