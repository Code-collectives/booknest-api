// app.mjs
import express from 'express';
import mongoose from 'mongoose';
import bookRoutes from './routes/books.js';
import reviewRouter from './routes/review.js';
import authorRouter from './routes/authors.js';
import cors from 'cors';
import userRoutes from './routes/user.js';



const app = express();
app.use(userRoutes);



// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
  });

  app.use(express.json());
app.use(cors());
  
// Connect to MongoDB
await mongoose.connect(process.env.MONGO_URI);

// Use the book routes
app.use( bookRoutes);
app.use(reviewRouter);
app.use(authorRouter);

// Start the server
const port = 3007;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
