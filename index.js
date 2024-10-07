import express from "express";
import mongoose from "mongoose";


//connect to database
await mongoose.connect(process.env.MONGO_URI);




//create express app
const app = express();

//Use middlewares
app.use(express.json());

//listening to port
app.listen(3007, function() {
    console.log('server is running on port 3007')
});