const express = require('express')
// import express from ('express')
const dotenv = require('dotenv')
const route = require('./routes/index.js')
const db = require('./config/db');
const bodyParser = require('body-parser');
dotenv.config();
db.connectDB();

const app = express()


app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json()); 
// app.use(
//     express.urlencoded({
//       extended: true
//     })
//   )
route(app);
const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`http://localhost:${PORT}`) )