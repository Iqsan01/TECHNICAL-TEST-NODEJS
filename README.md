# Task Management API

This is a simple API for task management applications built using Node.js, Express.js, Sequelize, and MySQL.

## Prerequisites

- Node.js (v18.16.0 or above)
- MySQL (v3.3.0)

## Getting Started

1. Clone the repository:

   git clone <repository-url>

2. Install dependencies:

   cd task-management-api
   npm install

3. Set up the database:

   Create a MySQL database.
   With database name = technical_test

4. Start the server:
   yarn dev
   The API will be available at http://localhost:3001.

   API Endpoints
   GET /tasks: Get a list of all tasks.
   POST /tasks: Create a new task.
   GET /tasks/{id}: Get a task by ID.
   PATCH /tasks/{id}: Update a task by ID.
   DELETE /tasks/{id}: Delete a task by ID.

   Environment Variables
   Create a .env file in the project root directory and add the following variables:
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=your_database_host
   DB_DIALECT=your_database_dialect
   PORT=3001
