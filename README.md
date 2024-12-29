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
