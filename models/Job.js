const Sequelize = require("sequelize")
const db = require("../db/connection")

const Job = db.define('Job', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    salary: {
        type: Sequelize.STRING
    },
    comapny: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
  
    new_jobs: {
        type: Sequelize.INTEGER
    }
})

module.exports = Job