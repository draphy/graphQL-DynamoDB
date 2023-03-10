# GraphQL Project

This project is a simple web application that uses GraphQL to fetch and display data from a server. It was built using React, Node.js, Express, DynamoDB and Apollo Server.

## Installation

1.  Clone the repository to your local machine.
2.  Open a terminal and navigate to the project directory.
3.  Run `npm run install-all` to install the app's dependencies.

## Setting up Environment Variables

This project uses environment variables to store sensitive information, such as database credentials and API keys. To use this project, you'll need to create a .env file in the root directory and add the following variables:

```
NODE_ENV = 'development'
PORT = 4000
AWSAccessKeyId = "YOUR AWS ACCESS KEY ID"
AWSSecretKey = "YOUR AWS SECRET KEY"
region = "YOUR AWS DYNAMO DB REGION"

```

## Usage

Run `npm run dev` to start the app in development mode.
Once the development server is running, 
open your web browser and navigate to http://localhost:3000 to view the application.

## Features

- View a list of books with their titles, authors, and genres
- Click on a book to view its details, including other books by the same author
- Add a new book and author to the list by filling out a popup form 

## Technologies Used

- React
- Node.js
- GraphQL
- Apollo Client
- Express.js
- Dynamo DB
- AWS


