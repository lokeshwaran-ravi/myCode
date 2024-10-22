// Define schemas
const ageBetweenSchema = {
    body: {
        type: 'object',
        properties: {
            min_age: { type: 'number' },
            max_age: { type: 'number' },
        },
        required: ['min_age', 'max_age'],
    },
};

const loginSchema = {
    body: {
        type: 'object',
        properties: {
            username: { type: 'string', minLength: 1 }, // Ensures username is a non-empty string
            password: { type: 'string', minLength: 6 }, // Ensures password is at least 6 characters long
        },
        required: ['username', 'password'], // Both fields are required
    },
};

const signUpSchema = {
    body: {
        type: 'object',
        properties: {
            "username": {
                "type": "string",
                "minLength": 1,
                "description": "A unique identifier for the user."
            },
            "password": {
                "type": 'string',
                "minLength": 6,
                "pattern": "^(?=.*[!@#$%^&*(),.?\":{}|<>]).*$", // Regex to ensure at least one special character
                "description": "A secure password with a minimum length of 6 characters and at least one special character."
            },
            "email": {
                "type": "string",
                "format": "email",
                "description": "A valid email address."
            },
            "firstName": {
                "type": "string",
                "minLength": 1,
                "description": "User's first name."
            },
            "lastName": {
                "type": "string",
                "minLength": 1,
                "description": "User's last name."
            },
            "phone": {
                "type": "string",
                "pattern": "^\\+?[1-9]\\d{1,14}$",
                "description": "User's phone number in international format."
            }
        },
        "required": ["username", "password", "email", "firstName", "lastName", "phone"],

    },
};

module.exports = {
    ageBetweenSchema,
    loginSchema, signUpSchema
};