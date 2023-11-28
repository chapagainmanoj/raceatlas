let User = require('./model');
let { expressjwt } = require('express-jwt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const createToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        algorithm: 'HS512',
        expiresIn: "20min"
    });
}


module.exports.requireLogin = expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS512'],
    userProperty: 'auth' 
});


