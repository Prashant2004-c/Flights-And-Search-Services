const { FlightService } = require('../services/index');
const {SuccesCodes} = require('../utils/error-codes');
const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price,
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccesCodes.CREATED).json({
            data : flight,
            success : true,
            err: {},
            message: 'Succesfully created a flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Not able to create a flight",
            err : error,
            data: {}
        });
    }
}

const getAll = async (req,res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        // console.log(req.query);
        return res.status(200).json({
            data : response,
            success : true,
            err: {},
            message: 'Succesfully fetched all flights'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Not able to fetch all flights",
            err : error,
            data: {}
        });
    }
}

const get = async (req,res) => {
    try {
        const response = await flightService.getFlight(req.params.id); 
        return res.status(200).json({
            data : response,
            success : true,
            err: {},
            message: 'Succesfully fetched the flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Not able to fetch the flight",
            err : error,
            data: {}
        });
    }
}

const update = async (req,res) => {
    try {
        const response = await flightService.updateFlight(req.params.id, req.body); 
        return res.status(200).json({
            data : response,
            success : true,
            err: {},
            message: 'Succesfully updated the flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Not able to update the flight",
            err : error,
            data: {}
        });
    }
}

module.exports = {
    create,
    getAll,
    get,
    update
    
}