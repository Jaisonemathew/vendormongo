const express = require('express');
const mongoose=require('mongoose');
const morgan =require("morgan");
const cors = require('cors');
const bodyParser=require('body-parser');
const Venderroute=require('./routes/Vendor')
mongoose.connect('mongodb+srv://ajith1323:Achanamma@cluster0.3jql3om.mongodb.net/Vendors?retryWrites=true&w=majority');
const  db=mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log("DB connected Succesfully");
})
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors());

const PORT=3000
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})

app.use('/api/Vendors',Venderroute)