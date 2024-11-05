# Project Title

A brief description of your project, its purpose, and functionality.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Accessing Swagger API Documentation](#accessing-swagger-api-documentation)
- [API Endpoints](#api-endpoints)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js
- MongoDB (local or cloud instance)
- An `.env` file configured with your environment variables

## Installation

To install the project, follow these steps:

1. Install Packages:
   ```bash
   npm install
   ```
2. Create a `.env` file in the root directory and add your database URL and any other environment variables. Here’s an example:

```bash
# Port number
PORT=3000
# URL of the Mongo DB - This URL will be expired in 7 days
DATABASE_URL="mongodb+srv://andrewviquang:lq6sAzk9hVue5wlq@labcluster.jxghisa.mongodb.net/fullstackpractice?retryWrites=true&w=majority&appName=LabCluster"

```

3. To start the app, use the following command:

```bash
npm run dev
```

This will start the server on the default port (usually 3000). You can specify a different port by setting the PORT environment variable in your .env file.

## Generate Data

I've already provided `insert_data.js` script in `src` folder for inserting data into database, to run it, type:

```bash
node src/insert_data.js
```

## Accessing Swagger API Documentation

Once the server is running, you can access the Swagger API documentation by navigating to the following URL in your browser:

```bash
http://localhost:3000/docs
```

Make sure to replace 3000 with your actual port number if you have configured a different one.

## API Endpoints

API endpoints available in application"

- GET /product?page=1&limit=10: Get Products.
