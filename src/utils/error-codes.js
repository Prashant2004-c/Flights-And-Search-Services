const ClientErrorCodes = Object.freeze({
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
});

const ServerErrorCodes  = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
    NOT_IMPLEMENTED: 501
});

const SuccesCodes = Object.freeze({
    OK: 200,
    CREATED: 201,
});

module.exports = {
    ClientErrorCodes,
    ServerErrorCodes,
    SuccesCodes
}