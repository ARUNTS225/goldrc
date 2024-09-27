const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const connectDatabase = require('./config/databaseconfig')
dotenv.config({path: path.join(__dirname, 'config', 'config.env')})

const take = require('./routes/rateapi');
const give = require('./routes/giveapi');

connectDatabase();

app.use(express.json());
app.use(cors());
app.use('/api/v1/',take);
app.use('/api/v1/',give);

app.listen(process.env.PORT,()=>{
    console.log(`Server ${process.env.NODE_ENV}`)
})