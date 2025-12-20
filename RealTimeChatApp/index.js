const dotenv = require('dotenv')
dotenv.config();
const express = require('express');

const port = process.env.PORT_NUMBER || 8000;
const app= express();
app.listen(port,()=>{
    console.log('listening to requests on PORT '+port);
})