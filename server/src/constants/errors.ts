type ErrorMessage = string

interface Errors {
    AUTHROIZATION_HEADER_NOT_PROVIDED: ErrorMessage
    INVALID_PASSWORD: ErrorMessage
    INVALID_TOKEN: ErrorMessage
    INVALID_USER: ErrorMessage
    TOKEN_EXPIRED: ErrorMessage
    TOKEN_NOT_PROVIDED: ErrorMessage
    USER_ALREADY_EXISTS: ErrorMessage
    USER_NOT_FOUND: ErrorMessage
    USER_NOT_PROVIDED: ErrorMessage
}

export const ERRORS: Errors = {
    AUTHROIZATION_HEADER_NOT_PROVIDED: 'authorization header not provided',
    INVALID_PASSWORD: 'invalid password',
    INVALID_TOKEN: 'invalid token',
    INVALID_USER: 'invalid user',
    TOKEN_EXPIRED: 'jwt expired',
    TOKEN_NOT_PROVIDED: 'token not provided',
    USER_ALREADY_EXISTS: 'user already exists',
    USER_NOT_FOUND: 'user not found',
    USER_NOT_PROVIDED: 'user not provided'
}



