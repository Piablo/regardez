console.log("Starting server...");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {sequelize} = require('./models');

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors());


require('./routes')(app);

sequelize.sync()
.then(() => {
    app.listen(process.env.API_PORT);
    console.log("server started on " + process.env.API_PORT);
})