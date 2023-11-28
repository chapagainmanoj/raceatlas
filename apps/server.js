
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

require('dotenv').config()

const userRouter = require('./user/routes');

const app = express();


app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));


app.use('/auth', userRouter)

app.get('/', async (req, res) => {
  res.send("Welcome to Raceatlas API");
});

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`${process.env.ENV} server listening on port ${process.env.PORT}`);
});