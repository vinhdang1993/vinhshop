const express = require('express')
// import express from ('express')
const cors = require('cors')
const dotenv = require('dotenv')
const route = require('./routes/index.js')
const db = require('./config/db');
const bodyParser = require('body-parser');
dotenv.config();
db.connectDB();
const PORT = process.env.PORT || 5000
const app = express()
const corsOptions ={
    origin:'*', 
    credentials:true,          
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json()); 
// app.use(
//     express.urlencoded({
//       extended: true
//     })
//   )
route(app);


app.listen(PORT,console.log(`http://localhost:${PORT}`) )