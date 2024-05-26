export const registerUser = {
    type: "object",
    required: ["username", "email", "firstName", "password"],
    properties: {
        email: {
            type: "string",
            minLength: 1,
            format: "email"
        },
        firstName: {
            type: "string",
            minLength: 1,
            maxLength: 16,
            pattern: "^[A-Za-z]{1,16}$"
        },
        lastName: {
            type: "string",
            minLength: 1,
            maxLength: 16,
            pattern: "^[A-Za-z]{1,16}$"
        },
        password: {
            type: "string",
            minLength: 8,
            maxLength: 64,
            pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,64}$"
        }
    },
    additionalProperties: false
};

export const getLoginOptions = {
    type: "object",
    required: [ "email"],
    properties: {
        email: {
            type: "string",
            minLength: 1,
            format: "email"
        }
    },
    additionalProperties: false
};