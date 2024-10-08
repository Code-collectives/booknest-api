import express from "express";
import mongoose from "mongoose";
import authorRouter from "./routes/authors.js";
import reviewRouter from "./routes/review.js";


//connect to database
await mongoose.connect(process.env.MONGO_URI);




//create express app
const app = express();

//Use middlewares
app.use(express.json());

// Use Routes

app.use(authorRouter);
app.use(reviewRouter);

//listening to port
app.listen(3007, function() {
    console.log('server is running on port 3007')
});