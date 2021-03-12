const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')


const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json()); //utilizes the body-parser package
app.use(bodyParser.urlencoded()); //Parse URL-encoded bodies

// app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(3333, () => console.log('running'));
