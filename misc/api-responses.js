function getServerError(error) {
    return getObject(1, "Server Error", null, error);
}

function getValidationError(error) {
    return getObject(2, "Validation Error", null, error);
}

function getSuccess(records) {
    return getObject(0, "Success", records, null);
}

function getObject(code, msg, records, error) {
    let response = {};
    response.code = code;
    response.msg = msg;
    if (records) {
        response.records = records;
    }
    if (error) {
        response.error = error;
    }
    return response;
}

module.exports = {
    getServerError,
    getValidationError,
    getSuccess
}