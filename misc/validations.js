function validateDate(name, date) {
    let error = "";
    if (!name) name = 'date';
    let regEx = new RegExp(/[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/);
    if (!date) {
        error += '[' + name + ' is a required field]';
    } else {
        if (typeof (date) != 'string') {
            error += '[' + name + ' must be a date string]';
        } else {
            let dateObj = new Date(date);
            if (dateObj == 'Invalid Date') {
                error += '[' + name + ' is an invalid date string]';
            } else if (!regEx.test(date)) {
                error += '[' + name + ' is an invalid date string]';
            }
        }
    }
    return error;
}

function validateNumber(name, number) {
    let error = "";
    if (!name) name = 'number';
    if (!number && number != 0) {
        error += '[' + name + ' is a required field]';
    } else {
        if (typeof (number) != 'number') {
            error += '[' + name + ' must be an number]';
        }
    }
    return error;
}


module.exports = {
    validateDate,
    validateNumber,
};