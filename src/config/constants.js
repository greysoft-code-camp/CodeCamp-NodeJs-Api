export default {
  RESPONSE_STATUS: {
    SUCCESS: 'success',
    FAILURE: 'failure',
    ERROR: 'error',
    AUTH_ERROR: 'auth_error',
    NOT_FOUND: 'not found',
    ORDER_EXPIRED: 'order expired',
  },
  RESPONSE_STATUS_CODES: {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  },
  MESSAGES: {
    INTERNAL_SERVER_ERROR: 'Internal Server Error. Please try again!',
    INVALID_CREDENTIALS: 'Invalid Credentials',
    LOGIN_SUCCESS: 'Login Success',
    UNAUTHORIZED: 'Unauthorized access',
    INPUT_VALIDATION_ERROR: 'Input Validation Error',
    INVALID_REQUEST: 'Invalid Request',
    ROUTE_DOES_NOT_EXIST: 'Sorry Route does not exists',
    SERVER_STARTED: 'Server running on port',
    MONGODB_CONNECTED: 'MongoDB Successfully Connected',
    MIN_PASSWORD_ERROR: 'password cannot be less than six',
    EMAIL_REGEX:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    EMAIL_REGEX_ERROR: 'invalid email',
  },
  FIELD: {
    EMAIL: 'email',
    PASSWORD: 'password',
    FULLNAME: 'fullName',
    BOARD_NAME: 'boardData',
    BOARD_ID: 'boardId',
    TODO_BODY: 'body',
    TODO_LIST: 'list',
  },
  ENUM: {
    TODO: ['backlog', 'progress', 'review', 'merged', 'done'],
  },
};
