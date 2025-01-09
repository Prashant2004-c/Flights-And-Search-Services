const { CityService } = require('../services/index');

const cityService = new CityService();
`
post 
data -> req.body
`
const create = async (req,res) => {
    try {
       const city = await cityService.createCity(req.body);
       return res.status(201).json({
        data : city,
        success : true,
        message : "City created successfully",
        err : {}
       }) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Internal Server Error",
            err : error,
            data: {}
        })
    }
}

`
req ->delete
id in params like /city/:id
`
const destroy = async (req,res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
         data : response,
         success : true,
         message : "City deleted successfully",
         err : {}
        }) 
     } catch (error) {
         console.log(error);
         return res.status(500).json({
             success : false,
             message : "not able to delete the city",
             err : error,
             data: {}
         })
     }
}


`req -> get
id -> /city/:id
`
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error
        });
    }
}

`req-> patch
id -> city/:id ->req.body
`
const update = async (req,res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
         data : city,
         success : true,
         message : "City updated successfully",
         err : {}
        }) 
     } catch (error) {
         console.log(error);
         return res.status(500).json({
             success : false,
             message : "not able to update the city",
             err : error,
             data: {}
         })
     }
}

const getAll = async (req,res) =>{
    try {
        const response = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "not able to fetch all the cities",
            err : error,
            data: {}
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}

