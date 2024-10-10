import express from 'express';
import mongoose from 'mongoose';
import bookRoutes from './routes/books.js';
import authorRouter from './routes/authors.js';
import reviewRouter from './routes/review.js';
import userRoutes from './routes/user.js';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(cors());


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
  });

  
// Connect to MongoDB
await mongoose.connect(process.env.MONGO_URI);

// Use the book routes
app.use( bookRoutes);
app.use( authorRouter);
app.use( reviewRouter);

// Start the server
const port = 3007;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
