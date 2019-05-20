const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
   'charity',
   {
      id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      name: {
         type: Sequelize.STRING
      },
      description: {
         type: Sequelize.STRING
      },
      ein: {
         type: Sequelize.STRING
      },
      website: {
         type: Sequelize.STRING
      },
      created: {
         type: Sequelize.DATE,
         defaultValue: Sequelize.NOW
      }
   },
   {
      timestamps: false
   }
);
