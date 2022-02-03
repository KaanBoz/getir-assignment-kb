const validations = require("../misc/validations");
const apiResponses = require("../misc/api-responses");
const db = require("../db/db")

module.exports = getirAPI;

async function getirAPI(req, res) {
    try {
        // check the incoming data 
        let error = checkValidation(req.body);
        if (!error) {
            // no errors - we continue with data retrieval
            res.json(apiResponses.getSuccess(await db.getir(
                req.body.startDate,
                req.body.endDate,
                req.body.minCount,
                req.body.maxCount
            )));

        } else {
            // validation errors
            res.status(400).json(apiResponses.getValidationError(error));
        }
    } catch (err) {
        // unexpected error
        // better logging can be done
        console.log(err);
        res.status(500).json(apiResponses.getServerError("an unexpected error has occured"));
    }
}

function checkValidation(value) {
    let error = "";
    error += validations.validateDate('startDate', value.startDate);
    error += validations.validateDate('endDate', value.endDate);
    error += validations.validateNumber('minCount', value.minCount);
    error += validations.validateNumber('maxCount', value.maxCount);
    return error;
}
