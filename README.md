# Multi-Stage-Server

The Multi-Stage-Server application collects user data through a three-step process, stores it in a database, and then presents it in a table for easy viewing.

## Project Setup

### Installation

1. **Clone the Repository**
   git clone https://github.com/yourusername/multi-stage-server.git
   cd multi-stage-server

2. **Install Dependencies**
   npm install

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:
   MONGODB_URI=mongodb://localhost:27017/multi-stage-db
   PORT=5000

4. **Run the Application**
   npm start

### Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Zod**: Schema validation library for TypeScript and JavaScript.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
- **Dotenv**: Module that loads environment variables from a `.env` file into `process.env`.

#### Create User Data

To create user data, send a `POST` request to `/api/v1/post/create` with the following JSON body:
{
"fullName": "John Doe",
"dob": "1990-01-01",
"nationality": "American",
"email": "john.doe@example.com",
"phone": "1234567890",
"departureDate": "2024-07-01",
"returnDate": "2024-07-15",
"accommodation": "Hotel",
"specialRequests": "None",
"healthDeclaration": "None",
"emergencyContact": "Jane Doe",
"medicalConditions": "None"
}

## Get All Data

To retrieve all users, send a GET request to `/api/v1/post`.

## Development

To start the server in development mode with TypeScript, use:
npm run startDev

## Acknowledgements

Node.js, Express, Mongoose, TypeScript, Zod, CORS, Dotenv

Summary
This setup provides a complete MVC pattern implementation for user data collection in a Node.js application using Express and MongoDB. It includes validation using express-validator and organizes the code into separate modules for models, controllers, services, routes, and validation utilities, ensuring a clear and maintainable structure.

Github Link: https://github.com/prasanjitsarker3/Multi-Stage-Task
