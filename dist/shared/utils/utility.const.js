"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ON_CREATE_BAD_RESPONSE = exports.ON_INTERNAL_SERVER_ERROR_RESPONSE = exports.STATIC_MESSAGES = exports.STATIC_VALUES = exports.jwtConstants = void 0;
const common_1 = require("@nestjs/common");
exports.jwtConstants = {
    secret: 'AB1CEE97-5FB1-47FE-8ADE-D2427660BBD6'
};
exports.STATIC_VALUES = {
    JWT_TOKEN_VALIDITY: '90d',
};
exports.STATIC_MESSAGES = {
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
    PROCESSING_ERROR: (actionName) => `An error occured while processing the ${actionName} request.`,
    ENTITY_STATUS_SAME: (entityName) => `${entityName} status can not be changed to same status!`,
    ENTITY_CREATED: (entityName) => `${entityName} has been created successfully!`,
    ENTITY_UPDATED: (entityName) => `${entityName} has been updated successfully!`,
    ENTITY_STATUS_UPDATED: (entityName) => `${entityName} status has been updated successfully!`,
    ENTITY_DELETED: (entityName) => `${entityName} has been deleted successfully!`,
    ENTITY_FILTER: (entityName) => `${entityName} has been filter successfully!`,
    ENTITY_NOT_FOUND: (entityName) => `${entityName} not found!`,
    ENTITY_FOUND: (entityName) => `${entityName} found!`,
    ENTITIES_NOT_FOUND: (entityNames) => `${entityNames[0]} or ${entityNames[1]} Id not found!`,
    ENTITY_NOT_CREATED: (entity) => `OPPS: ${entity} failed to create due to some reasons.`,
    ENTITY_DUPLICATE: (entity) => `Duplicate ${entity} found!`,
    EMPTY_INPUT: (input) => input || 'Input value can not be empty.',
    ARRAY_TYPE: (propName) => `${propName} must have array value.`,
    STRING_TYPE: (propName) => `${propName} must have string value.`,
    BOOLEAN_TYPE: (propName) => `${propName} must have boolean value (true/ false | 1/ 0)`,
    OBJECT_TYPE: (propName) => `${propName} must have object value`,
    NUMBER_TYPE: (propName) => `${propName} must have number value.`,
    ENTITY_DETAILS: (entityName) => `${entityName} details retrieved successfully!`,
    REQUIRED: (propName) => `${propName} must have value.`,
    ENTITY_INACTIVE: (entityName) => `${entityName} is inactive!`,
    LENGTH_TYPE: (propName, min, max) => `${propName} must be between ${min} - ${max} characters long`,
    POSITIVE_NUMBER: (propName) => `${propName} must be positive number.`,
    MIN_LENGTH: (propName, min) => `${propName} must be at least ${min} characters long.`,
    MAX_LENGTH: (propName, max) => `${propName} must be at most ${max} characters long.`,
    MIN_NUMBER: (propName, min) => `${propName} must be at least ${min}.`,
    MAX_NUMBER: (propName, max) => `${propName} must be at most ${max}.`,
    EMAIL_VALIDATION: 'Email must be a valid email address.',
};
exports.ON_INTERNAL_SERVER_ERROR_RESPONSE = {
    status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Error: Internal Server Error',
    schema: {
        example: {
            message: exports.STATIC_MESSAGES.INTERNAL_SERVER_ERROR
        }
    }
};
exports.ON_CREATE_BAD_RESPONSE = {
    status: common_1.HttpStatus.BAD_REQUEST,
    description: 'Error: Bad Request',
    schema: {
        example: {
            "message": ["string"],
        }
    }
};
//# sourceMappingURL=utility.const.js.map