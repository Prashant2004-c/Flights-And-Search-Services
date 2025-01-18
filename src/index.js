const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

// const db = require('./models/index');
// const sequelize = require('sequelize');
// const { City , Airport} = require('./models/index');


const setupAndStartServer = async () =>{

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api' , ApiRoutes)

    app.listen(PORT , () => {
        console.log(`Server started at ${PORT}`);
        
    });
    // db.sequelize.sync({alter : true});
    // const city = await City.findOne({
    //     where :{
    //         id : 13
    //     }
    // });
    // console.log(city);
    // const airports = await Airport.findAll({
    //     where : {
    //         cityId : city.id
    //     }
    // });
    // const newAirport = await Airport.create()
    // const airports = await city.getAirports();
    // console.log(airports);
}

setupAndStartServer();