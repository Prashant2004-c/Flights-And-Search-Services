const {ClientErrorCodes} = require('../utils/error-codes');
const validateCreateFlight = (req,res,next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId || 
        !req.body.arrivalAirportId || 
        !req.body.departureTime || 
        !req.body.arrivalTime || 
        !req.body.price
    ) {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            message: "Invalid requjest body for create flight",
            err: "Missing required fields",
            success: false

        });
    }
    next();
}

module.exports = {
    validateCreateFlight
}