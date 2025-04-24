import { HttpStatus } from "@nestjs/common";

export const jwtConstants = {
    secret: 'AB1CEE97-5FB1-47FE-8ADE-D2427660BBD6'
};

export const STATIC_VALUES = {
    JWT_TOKEN_VALIDITY: '90d',
}

export const STATIC_MESSAGES = {
    INVALID_CODE: 'Invalid code!',
    SUBSCRIPTION_DUPLICATE: 'Subscription already active with same app count and duration in days!',
    COMPANY_DUPLICATE_EMAIL: 'Company with this email already exists!',
    UNAUTHORIZED: 'Unauthorized access!',
    INVALID_AUTH: 'Invalid credentials, please use correct one.',
    EXPIRED_LINK: 'Link is invalid or has been expired!',
    TOKEN_EXPIRED: 'Token is invalid or has been expired!',
    TOKEN_MISSING: 'Token is missing!',
    SIGNUP_DONE: 'Signup Done!',
    LOGIN_DONE: 'Login successful!',
    LOGOUT_DONE: 'Logout successful!',
    INTERNAL_SERVER_ERROR: 'OPPS: Something went wrong while processing the request.',
    BAD_REQUEST: 'We encountered an error while processing your request, please try after sometimes.',
    CHANGE_PASSWORD: 'Your password has been successfully change.',
    RESET_PASSWORD: 'Your password has been successfully reset. Now click the Login link bellow for login.',
    CUSTOMER_SIGNUP: "Thank you for showing your interest! There's one more step to activate your account. Please check your registered email address for the activation link.",
    INVALID_DATE: 'Invalid date format (e.g. DD/MM/YYYY)',
    INVALID_ID: 'Invalid Id ',
    TRANSACTION_FAILED: 'Running transaction failed due to server error!',
    EMAIL_SENT: 'Please log in to your registered email address to activate your account.',

    PROCESSING_ERROR: (actionName: string) => `An error occured while processing the ${actionName} request.`,
    ENTITY_STATUS_SAME: (entityName: string) => `${entityName} status can not be changed to same status!`,
    ENTITY_CREATED: (entityName: string) => `${entityName} has been created successfully!`,
    ENTITY_UPDATED: (entityName: string) => `${entityName} has been updated successfully!`,
    ENTITY_STATUS_UPDATED: (entityName: string) => `${entityName} status has been updated successfully!`,
    ENTITY_DELETED: (entityName: string) => `${entityName} has been deleted successfully!`,
    ENTITY_FILTER: (entityName: string) => `${entityName} has been filter successfully!`,
    ENTITY_NOT_FOUND: (entityName: string) => `${entityName} not found!`,
    ENTITY_FOUND: (entityName: string) => `${entityName} found!`,
    ENTITIES_NOT_FOUND: (entityNames: string[]) => `${entityNames[0]} or ${entityNames[1]} Id not found!`,
    ENTITY_NOT_CREATED: (entity: string) => `OPPS: ${entity} failed to create due to some reasons.`,
    ENTITY_DUPLICATE: (entity: string) => `Duplicate ${entity} found!`,
    EMPTY_INPUT: (input?: string) => input || 'Input value can not be empty.',
    ARRAY_TYPE: (propName: string) => `${propName} must have array value.`,
    STRING_TYPE: (propName: string) => `${propName} must have string value.`,
    BOOLEAN_TYPE: (propName: string) => `${propName} must have boolean value (true/ false | 1/ 0)`,
    OBJECT_TYPE: (propName: string) => `${propName} must have object value`,
    NUMBER_TYPE: (propName: string) => `${propName} must have number value.`,
    ENTITY_DETAILS: (entityName: string) => `${entityName} details retrieved successfully!`,
    REQUIRED: (propName: string) => `${propName} must have value.`,
    ENTITY_INACTIVE: (entityName: string) => `${entityName} is inactive!`,
    LENGTH_TYPE: (propName: string, min: number, max: number) => `${propName} must be between ${min} - ${max} characters long`,
    POSITIVE_NUMBER: (propName: string) => `${propName} must be positive number.`,
    MIN_LENGTH: (propName: string, min: number) => `${propName} must be at least ${min} characters long.`,
    MAX_LENGTH: (propName: string, max: number) => `${propName} must be at most ${max} characters long.`,
    MIN_NUMBER: (propName: string, min: number) => `${propName} must be at least ${min}.`,
    MAX_NUMBER: (propName: string, max: number) => `${propName} must be at most ${max}.`,
    EMAIL_VALIDATION: 'Email must be a valid email address.',
};

export interface IHttpResponse<T = null> {
    data?: T;
    message?: string;
}

export const ON_INTERNAL_SERVER_ERROR_RESPONSE = {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Error: Internal Server Error',
    schema: {
        example: {
            message: STATIC_MESSAGES.INTERNAL_SERVER_ERROR
        }
    }
};

export const ON_CREATE_BAD_RESPONSE = {
    status: HttpStatus.BAD_REQUEST,
    description: 'Error: Bad Request',
    schema: {
        example: {
            "message": ["string"],
        }
    }
};
