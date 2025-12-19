require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/user-roles-perm");


const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const authRoute = require('./routes/authRoute');
app.use('/api',authRoute);

//admin routes
const adminRoute = require('./routes/adminRoute');
app.use('/api/admin',adminRoute);

//common  routes
const commonRoute = require('./routes/commonRoute');
app.use('/api',commonRoute);


const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})