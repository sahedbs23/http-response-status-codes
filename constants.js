import * as http from 'http';

// Informational responses
export const HTTP_CONTINUE = 100;
export const HTTP_SWITCHING_PROTOCOLS = 101;
export const PROCESSING = 102;

// We both are okay.
export const HTTP_OK = 200;
export const HTTP_CREATED = 201;
export const HTTP_ACCEPTED = 202;
export const HTTP_NON_AUTHORITATIVE_INFORMATION = 203;
export const HTTP_NO_CONTENT = 204;
export const HTTP_RESET_CONTENT = 205;
export const HTTP_PARTIAL_CONTENT = 206;
export const HTTP_MULTI_STATUS = 207;

// let's find the answer somewhere else.
export const HTTP_MULTIPLE_CHOICES = 300;
export const HTTP_MOVED_PERMANENTLY = 301;
export const HTTP_MOVED_TEMPORARILY = 302;
export const HTTP_SEE_OTHER = 303;
export const HTTP_NOT_MODIFIED = 304;
export const HTTP_USE_PROXY = 305;
export const HTTP_TEMPORARY_REDIRECT = 307;
export const HTTP_PERMANENT_REDIRECT = 308;

// It's you! Not me!
export const HTTP_BAD_REQUEST = 400;
export const HTTP_UNAUTHORIZED = 401;
export const HTTP_PAYMENT_REQUIRED = 402;
export const HTTP_FORBIDDEN = 403;
export const HTTP_NOT_FOUND = 404;
export const HTTP_METHOD_NOT_ALLOWED = 405;
export const HTTP_NOT_ACCEPTABLE = 406;
export const HTTP_PROXY_AUTHENTICATION_REQUIRED = 407;
export const HTTP_REQUEST_TIMEOUT = 408;
export const HTTP_CONFLICT = 409;
export const HTTP_GONE = 410;
export const HTTP_LENGTH_REQUIRED = 411;
export const HTTP_PRECONDITION_FAILED = 412;
export const HTTP_REQUEST_TOO_LONG = 413;
export const HTTP_REQUEST_URI_TOO_LONG = 414;
export const HTTP_UNSUPPORTED_MEDIA_TYPE = 415;
export const HTTP_REQUESTED_RANGE_NOT_SATISFIABLE = 416;
export const HTTP_EXPECTATION_FAILED = 417;
export const HTTP_IM_A_TEAPOT = 418;
export const HTTP_INSUFFICIENT_SPACE_ON_RESOURCE = 419;
export const HTTP_METHOD_FAILURE = 420;
export const HTTP_MISDIRECTED_REQUEST = 421;
export const HTTP_UNPROCESSABLE_ENTITY = 422;
export const HTTP_LOCKED = 423;
export const HTTP_FAILED_DEPENDENCY = 424;
export const HTTP_PRECONDITION_REQUIRED = 428;
export const HTTP_TOO_MANY_REQUESTS = 429;
export const HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
export const HTTP_UNAVAILABLE_FOR_LEGAL_REASONS = 451;

// It's me! Not you!
export const HTTP_INTERNAL_SERVER_ERROR = 500;
export const HTTP_NOT_IMPLEMENTED = 501;
export const HTTP_BAD_GATEWAY = 502;
export const HTTP_SERVICE_UNAVAILABLE = 503;
export const HTTP_GATEWAY_TIMEOUT = 504;
export const HTTP_HTTP_VERSION_NOT_SUPPORTED = 505;
export const HTTP_INSUFFICIENT_STORAGE = 507;
export const HTTP_NETWORK_AUTHENTICATION_REQUIRED = 511;

/**
 * get http status code text.
 * @param status {number} http status code.
 * @returns {string} string version of status code.
 */
export const stringify = (status) => http.STATUS_CODES[status];
