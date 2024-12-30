# Uber-MERN

## API Routes

### POST /users/register

This route is used to register a new user.

#### Request Body

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

#### Response

- `201 Created`: If the user is successfully registered.

  - `token` (string): The JWT token for the authenticated user.
  - `user` (object): The created user object.

- `400 Bad Request`: If there are validation errors.
  - `errors` (array): An array of validation error messages.

#### Example

**Request:**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1e8a001c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4a2a4b2b2b2b2b2b2b2",
    "socketId": null
  }
}
```

### POST /users/login

This route is used to log in an existing user.

#### Request Body

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user account.

#### Response

- `200 OK`: If the user is successfully logged in.

  - `token` (string): The JWT token for the authenticated user.
  - `user` (object): The authenticated user object.

- `400 Bad Request`: If there are validation errors.

  - `errors` (array): An array of validation error messages.

- `401 Unauthorized`: If the email or password is incorrect.
  - `message` (string): Error message indicating invalid email or password.

#### Example

**Request:**

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1e8a001c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4a2a4b2b2b2b2b2b2b2",
    "socketId": null
  }
}
```

### GET /users/profile

This route is used to get the profile of the authenticated user.

#### Headers

- `Authorization` (string, required): The JWT token of the authenticated user.

#### Response

- `200 OK`: If the user profile is successfully retrieved.

  - `user` (object): The authenticated user object.

- `401 Unauthorized`: If the token is invalid or not provided.
  - `message` (string): Error message indicating unauthorized access.

#### Example

**Request:**

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response:**

```json
{
  "user": {
    "_id": "60c72b2f9b1e8a001c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4a2a4b2b2b2b2b2b2b2",
    "socketId": null
  }
}
```

### GET /users/logout

This route is used to log out the authenticated user.

#### Headers

- `Authorization` (string, required): The JWT token of the authenticated user.

#### Response

- `200 OK`: If the user is successfully logged out.

  - `message` (string): Success message indicating successful logout.

- `400 Bad Request`: If there is an error during logout.
  - `message` (string): Error message indicating the issue.

#### Example

**Request:**

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response:**

```json
{
  "message": "Logged out successfully"
}
```

### POST /captains/register

This route is used to register a new captain.

#### Request Body

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the captain.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain account. Must be at least 6 characters long.
- `vehicle`: An object containing:
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The license plate of the vehicle. Must be at least 3 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be at least 1.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of "car", "motorcycle", or "auto".

#### Response

- `201 Created`: If the captain is successfully registered.

  - `token` (string): The JWT token for the authenticated captain.
  - `captain` (object): The created captain object.

- `400 Bad Request`: If there are validation errors.
  - `errors` (array): An array of validation error messages.

#### Example

**Request:**

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

**Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "60c72b2f9b1e8a001c8e4b8a",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "password": "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4a2a4b2b2b2b2b2b2b2",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketId": null,
    "status": "inactive",
    "location": {
      "lat": null,
      "lng": null
    },
    "createdAt": "2023-10-10T10:10:10.000Z",
    "updatedAt": "2023-10-10T10:10:10.000Z"
  }
}
```
