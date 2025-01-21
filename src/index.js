const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
const sequelize = require('sequelize');
const { City , Airport , Airplane} = require('./models/index');
// const airplane = require('./models/airplane');


const setupAndStartServer = async () =>{

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api' , ApiRoutes)

    app.listen(PORT , async () => {
        console.log(`Server started at ${PORT}`);
        // if(process.env.SYNC_DB){
        //     db.sequelize.sync({alter:true});
        // }
        
    });
}

setupAndStartServer();