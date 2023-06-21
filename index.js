const connectionDB = require('./config/db');
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
const router = require('./routes/routes');

dotenv.config();
connectionDB();

const cors = require('cors')
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/public', express.static('public'));
// parse application/json
app.use(bodyParser.json())
app.use(router);


app.listen(process.env.PORT, ()=>{
    console.log(`Server Start in ${process.env.NODE_MODE} with ${process.env.PORT}`);
})