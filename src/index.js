const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
require('./app/controllers/index')(app);



module.exports=app.listen(3334);