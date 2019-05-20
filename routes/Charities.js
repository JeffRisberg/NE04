const express = require("express")
const charities = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Charity = require("../models/Charity");
charities.use(cors())

process.env.SECRET_KEY = 'secret';

charities.get('/', (req, res) => {
   Charity.findAll({
   })
      .then(charities => {
         console.log(charities);
         res.json(charities)
      })
});

charities.get('/:id', (req, res) => {
   Charity.findOne({
      where: {
         id: req.params.id
      }
   })
      .then(charity => {
         console.log(charity);
         res.json(charity)
      })
});

charities.post('/', (req, res) => {
   const today = new Date();

   const charityData = {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      ein: req.body.ein,
      date_created: today,
      last_updated: today
   };

   console.log(charityData);

   Charity.create(charityData)
      .then(charity => {
         res.json({status: 1})
      })
      .catch(err => {
         res.send('error: ' + err)
      })
});

module.exports = charities;
