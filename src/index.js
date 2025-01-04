const express = require('express');
// import port from config folder
const {PORT} = require('./config/serverConfig');
const setupAndStartServer = async () =>{

    // create the express object
    const app = express();
    app.listen(PORT , () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();