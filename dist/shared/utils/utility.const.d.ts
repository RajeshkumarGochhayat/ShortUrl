import { HttpStatus } from "@nestjs/common";
export declare const jwtConstants: {
    secret: string;
};
export declare const STATIC_VALUES: {
    JWT_TOKEN_VALIDITY: string;
};
export declare const STATIC_MESSAGES: {
    INVALID_CODE: string;
    SUBSCRIPTION_DUPLICATE: string;
    COMPANY_DUPLICATE_EMAIL: string;
    UNAUTHORIZED: string;
    INVALID_AUTH: string;
    EXPIRED_LINK: string;
    TOKEN_EXPIRED: string;
    TOKEN_MISSING: string;
    SIGNUP_DONE: string;
    LOGIN_DONE: string;
    LOGOUT_DONE: string;
    INTERNAL_SERVER_ERROR: string;
    BAD_REQUEST: string;
    CHANGE_PASSWORD: string;
    RESET_PASSWORD: string;
    CUSTOMER_SIGNUP: string;
    INVALID_DATE: string;
    INVALID_ID: string;
    TRANSACTION_FAILED: string;
    EMAIL_SENT: string;
    PROCESSING_ERROR: (actionName: string) => string;
    ENTITY_STATUS_SAME: (entityName: string) => string;
    ENTITY_CREATED: (entityName: string) => string;
    ENTITY_UPDATED: (entityName: string) => string;
    ENTITY_STATUS_UPDATED: (entityName: string) => string;
    ENTITY_DELETED: (entityName: string) => string;
    ENTITY_FILTER: (entityName: string) => string;
    ENTITY_NOT_FOUND: (entityName: string) => string;
    ENTITY_FOUND: (entityName: string) => string;
    ENTITIES_NOT_FOUND: (entityNames: string[]) => string;
    ENTITY_NOT_CREATED: (entity: string) => string;
    ENTITY_DUPLICATE: (entity: string) => string;
    EMPTY_INPUT: (input?: string) => string;
    ARRAY_TYPE: (propName: string) => string;
    STRING_TYPE: (propName: string) => string;
    BOOLEAN_TYPE: (propName: string) => string;
    OBJECT_TYPE: (propName: string) => string;
    NUMBER_TYPE: (propName: string) => string;
    ENTITY_DETAILS: (entityName: string) => string;
    REQUIRED: (propName: string) => string;
    ENTITY_INACTIVE: (entityName: string) => string;
    LENGTH_TYPE: (propName: string, min: number, max: number) => string;
    POSITIVE_NUMBER: (propName: string) => string;
    MIN_LENGTH: (propName: string, min: number) => string;
    MAX_LENGTH: (propName: string, max: number) => string;
    MIN_NUMBER: (propName: string, min: number) => string;
    MAX_NUMBER: (propName: string, max: number) => string;
    EMAIL_VALIDATION: string;
};
export interface IHttpResponse<T = null> {
    data?: T;
    message?: string;
}
export declare const ON_INTERNAL_SERVER_ERROR_RESPONSE: {
    status: HttpStatus;
    description: string;
    schema: {
        example: {
            message: string;
        };
    };
};
export declare const ON_CREATE_BAD_RESPONSE: {
    status: HttpStatus;
    description: string;
    schema: {
        example: {
            message: string[];
        };
    };
};
