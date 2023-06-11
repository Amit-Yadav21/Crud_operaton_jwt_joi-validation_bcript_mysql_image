const express = require('express')
const app = express()
const port = 4000
const router = require('./Router/routers')
const multer = require('multer')
require("dotenv").config()
const bodyParser = require('body-parser')

app.use(express.json())

app.use('/image', express.static('Images'));
// --------------------------------------------------------
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

// ----------------------------------------------------------
app.use("/" ,router)
// ---------------------------------------------show error,if image file size too long, using multer file (filesize)
function errHandler(err,req,res,next){
    if(err instanceof multer.MulterError){
        res.json({message:err.message})
    }
}
app.use(errHandler)
// ------------------------------------------------
app.listen(port, () => 
console.log(`Example app listening on port ${port}!`))