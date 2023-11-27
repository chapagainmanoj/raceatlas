
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

require('dotenv').config()

const {startDatabase} = require('./database/mongo');
const {insertAd, getAds} = require('./database/ads');


// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', async (req, res) => {
    res.send(await getAds());
  });

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`${process.env.ENV} server listening on port ${process.env.PORT}`);
});