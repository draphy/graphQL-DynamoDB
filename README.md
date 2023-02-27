# GraphQL Project

This project is a simple web application that uses GraphQL to fetch and display data from a server. It was built using React, Node.js, Express, MongoDB and Apollo Server.

## Installation

1.  Clone the repository to your local machine.
2.  Open a terminal and navigate to the project directory.
3.  Run `npm run install-all` to install the app's dependencies.

## Setting up Environment Variables

This project uses environment variables to store sensitive information, such as database credentials and API keys. To use this project, you'll need to create a .env file in the root directory and add the following variables:

```
NODE_ENV = 'development'
PORT = 4000
MONGO_URL = "YOUR_MONGODB_CONNECTION_STRING"

```
Make sure to replace YOUR_MONGODB_CONNECTION_STRING with your actual MongoDB connection string.

## Usage

Run `npm run dev` to start the app in development mode.
Once the development server is running, 
open your web browser and navigate to http://localhost:3000 to view the application.

## Features

- View a list of books with their titles, authors, and genres
- Click on a book to view its details, including other books by the same author
- Add a new book to the list by filling out a form with its title, author, and genre

## Technologies Used

- React
- Node.js
- GraphQL
- Apollo Client
- Express.js
- MongoDB
- Mongoose


