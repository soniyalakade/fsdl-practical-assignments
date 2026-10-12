Assignment 03 – Student Feedback App (React + Express + MongoDB)

A full-stack feedback application. Students submit a name, a rating and a comment; feedback is stored in MongoDB and shown as a list where entries can be deleted.

Original repository: https://github.com/soniyalakade/FDSL7
Features
Submit feedback with student name (required), rating (1–5, required) and an optional comment
View the 50 most recent feedback entries, newest first
Delete any feedback entry
Server-side validation (returns 400 if name or rating is missing)
Success / error message shown after submitting
Technologies Used
Layer	Technology
Frontend	React 19, Vite, CSS
Backend	Node.js, Express 5, CORS, dotenv
Database	MongoDB (database fsdl7, collection feedback)
Project Structure
Assignment-03/
├── source-code/
│   ├── backend/          # Express REST API (server.js)
│   └── frontend/         # React + Vite app (src/App.jsx, src/App.css)
├── output-screenshots/
└── README.md
REST API

Base URL: http://localhost:3001

Method	Endpoint	Description
GET	/api/feedback	List the latest 50 feedback entries
POST	/api/feedback	Add feedback — body: { student, rating, comment }
DELETE	/api/feedback/:id	Delete a feedback entry by id
How to Run Locally

Prerequisites: Node.js 18+ and a MongoDB connection string (MongoDB Atlas or local).

Start the backend
bash
   cd source-code/backend
   npm install

Create a .env file in backend/:

   MONGO_URI=<your-mongodb-connection-string>

Then run node server.js (the API listens on port 3001).

Start the frontend (in a second terminal)
bash
   cd source-code/frontend
   npm install
   npm run dev
