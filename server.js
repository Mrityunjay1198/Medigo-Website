const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = 5000;

app.use(express.json());
const uri = "mongodb://localhost:27017/dbmedigo?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";
mongoose.connect(uri,
    {useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true}
    );
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB connected successfully')
})

app.get('/',(req,res) => {
    res.send("Hello Wolrd  :)")
});

const medigoRouter = require('./routes/medigo')
const userRouter = require('./routes/user')
const orderRouter = require('./routes/orders')

app.use('/medigo', medigoRouter)
app.use('/user', userRouter)
app.use('/orders', orderRouter)

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));