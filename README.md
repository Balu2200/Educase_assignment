# School Management API

## Overview
This project is a Node.js-based API built using the Express.js framework and MySQL to manage school data. It allows users to add new schools and retrieve a sorted list of schools based on proximity to a user-specified location.

## Features
- Add a new school with name, address, latitude, and longitude.
- Retrieve a list of schools sorted by geographical distance from a user-provided latitude and longitude.

## Prerequisites
- Node.js (v14.x or higher recommended)
- MySQL Server
- npm (Node Package Manager)

## Installation

### 1. Clone the Repository
```bash
git clone <https://github.com/Balu2200/Educase_assignment.git>
cd school-management-api
```

### 2. Install Dependencies
```bash
npm install express@^4.17.1 mysql2@^2.3.0
```

### 3. Set Up the Database
- Create a MySQL database named `school_management`.
  ```sql
  CREATE DATABASE school_management;
  ```
- Create the `schools` table with the following schema:
  ```sql
  USE school_management;
  CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    latitude FLOAT,
    longitude FLOAT
  );
  ```
- Update `config/db.js` with your MySQL credentials:
  - `host`: Your MySQL host (e.g., `localhost`)
  - `port`: Your MySQL port (e.g., `3306`)
  - `user`: Your MySQL username (e.g., `root`)
  - `password`: Your MySQL password (e.g., `system`)
  - `database`: `school_management`

### 4. Start the Application
```bash
node index.js
```
The server will run on `http://localhost:3000`.

## API Endpoints

### 1. Add School
- **Endpoint**: `POST /api/addSchool`
- **Request Body**:
  ```json
  {
    "name": "Green Valley School",
    "address": "123 Education Lane, City A",
    "latitude": 40.7128,
    "longitude": -74.0060
  }
  ```
- **Expected Response**:
  ```json
  {
    "message": "School added",
    "id": 1
  }
  ```
- **Status Codes**:
  - `201`: School added successfully
  - `400`: Invalid input data
  - `500`: Database error

### 2. List Schools
- **Endpoint**: `GET /api/listSchools`
- **Query Parameters**:
  - `latitude`: User latitude (e.g., `40.7128`)
  - `longitude`: User longitude (e.g., `-74.0060`)
- **Example Request**: `GET http://localhost:3000/api/listSchools?latitude=40.7128&longitude=-74.0060`
- **Expected Response**:
  ```json
  [
    {
      "id": 1,
      "name": "Green Valley School",
      "address": "123 Education Lane, City A",
      "latitude": 40.7128,
      "longitude": -74.0060
    }
  ]
  ```
- **Status Codes**:
  - `200`: Success
  - `400`: Missing or invalid latitude/longitude
  - `500`: Database error

## Hosting
- Deploy the API on a suitable hosting service such as Heroku, AWS Elastic Beanstalk, or DigitalOcean, render.
- Update the database configuration in `config/db.js` with the hosting environment's credentials.
- Follow the hosting provider’s deployment guide to push the code.

## Testing
- **Postman Collection**: A Postman collection is available for testing. Contact the developer at `balupasumarthi1@gmail.com` to request the collection file or shareable link.
- **Example Requests**: Included in the Postman collection with expected responses.
- **Share with Stakeholders**: The collection can be shared via email or exported as a JSON file for import into Postman.

## Contributing
please contact `balupasumarthi1@gmail.com` with details of your proposed changes.
please visit `balupasumarthi.vercel.app` website to contact furthur

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or support, reach out to `balupasumarthi1@gmail.com` or `balupasumarthi.vercel.app` .