const express = require('express');
const mongoose = require('mongoose')
const helmet = require('helmet')
const config = require('config')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({
    origin : '*'
}));

const SimpleRegistersRoutes = require('./routes/SimpleRegistersRoutes')

const mongoDBString  = `mongodb://0.0.0.0:27017/simpleregisternode`;

mongoose.connect(mongoDBString,{useNewUrlParser : true , useUnifiedTopology : true }  )
            .then(console.log("Connected to server!")).catch(err=>console.log("Error while connecting!",err));


app.use('/api/v1/users',SimpleRegistersRoutes);
app.get('/api/v1/health',(req,res,next)=>{
    return res.status(200).json({
        message : "Server Working perfectly!",
        success :true
    })
})

const port  = process.env.PORT ||  3000;

app.listen( port , ()=>{
    console.log(`server listening to port ${port}` );
})

