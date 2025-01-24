const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
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

module.exports = {
    create,
    getAll
    
}