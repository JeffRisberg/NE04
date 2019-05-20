const express = require("express")
const charities = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Charity = require("../models/Charity");
charities.use(cors())

process.env.SECRET_KEY = 'secret';

charities.get('/', (req, res) => {
   const charityData = {
      id: req.body.id
   };

   console.log(charityData);
   Charity.findOne({
      where: {
         id: req.body.id
      }
   })
      .then(charity => {
         res.json(charity)
      })
});

charities.post('/', (req, res) => {
   const today = new Date();

   const charityData = {
      name: req.body.name,
      description: req.body.description,
      created: today
   };

   console.log(charityData);

   Charity.create({
      where: {
         email: req.body.email
      }
   })
      .then(charity => {
      })
      .catch(err => {
         res.send('error: ' + err)
      })
});

module.exports = charities;
