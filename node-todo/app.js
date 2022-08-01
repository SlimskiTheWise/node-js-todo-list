const express = require('express');
const db = require('./db.js')();
const bodyParser = require("body-parser");
const app = express();
const connection = db.init();
db.db_open(connection);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
    console.log('server running on port 3000');
});

