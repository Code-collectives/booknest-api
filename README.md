//Booknest

Description
Booknest is a library management API that allows users to efficiently manage books, authors, and reviews. It provides functionality for adding, retrieving, updating, and deleting entries. The system is designed to make library operations more organized and accessible through a RESTful API.



Installation

1. Clone the repository:

    
    git clone <repository-url>
    

2. Navigate into the project directory:

    
    cd booknest
    

3. Install the required dependencies:

    
    npm install
    

4. Set up the MongoDB connection by creating a `.env` file in the root directory and adding your MongoDB URI:

    
    MONGODB_URI=mongodb://localhost:3007/booknest
    

5. Run the server:

    
    npm run dev since we are using nodemon.
    

    
    



Usage

Booknest is built with the following technologies:
 Node.js: The core runtime for building the API.
Express: For creating the API's routes and handling requests.
Mongoose: To connect and work with MongoDB.
Nodemon: For auto-restarting the server during development.
CORS: For handling cross-origin requests.
Joi: For validating request data.

To use the API, ensure your server is running and send HTTP requests using tools using Postman.



API Endpoints

Books
1. GET /books
   - Retrieves all books in the database.
   - Response: Status 200 (OK)

2. GET /books/:id
   - Retrieves a single book by its ID.
   - **Response**: Status 200 (OK) or 400 (Invalid ID)

3. POST /books
   - Adds a new book to the database.
   - **Response**: Status 201 (Created) or 422 (Validation Error)

4. PATCH /books/:id
   - Updates an existing book by its ID.
   - **Response**: Status 200 (OK) or 422 (Validation Error)

5. DELETE /books/:id
   - Deletes a book by its ID.
   - **Response**: Status 200 (OK) or 400 (Invalid ID)

**Authors**
1. GET /authors
   - Retrieves all authors.
   - **Response**: Status 200 (OK)

2. GET /authors/:id
   - Retrieves a single author by ID.
   - **Response**: Status 200 (OK) or 400 (Invalid ID)

3. POST /authors
   - Adds a new author.
   - **Response**: Status 201 (Created) or 422 (Validation Error)

4. PATCH /authors/:id
   - Updates an author by ID.
   - **Response**: Status 200 (OK) or 422 (Validation Error)

5. DELETE /authors/:id
   - Deletes an author by ID.
   - **Response**: Status 200 (OK) or 400 (Invalid ID)

Reviews
1. **GET /reviews**
   - Retrieves all reviews.
   - **Response**: Status 200 (OK)

2. GET /reviews/:id
   - Retrieves a single review by ID.
   - **Response**: Status 200 (OK) or 400 (Invalid ID)

3. POST /reviews
   - Adds a new review.
   - **Response**: Status 201 (Created) or 422 (Validation Error)

4. PATCH /reviews/:id
   - Updates a review by ID.
   - **Response**: Status 200 (OK) or 422 (Validation Error)

5. DELETE /reviews/:id
   - Deletes a review by ID.
   - **Response**: Status 200 (OK) or 400 (Invalid ID)

---

Environment Variables

The project requires the following environment variables in a `.env` file:

```bash
MONGODB_URI=<your-mongodb-uri>
PORT=<your-server-port>
