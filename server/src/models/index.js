const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database, 
    config.db.username,
    config.db.password, {
        host: config.db.host,
        dialect: 'mysql',
        define: {
            freezeTableName: true
    }
});

fs
    .readdirSync(__dirname)
    .filter((file) =>
    file !== 'index.js'
    )
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })

 db.sequelize = sequelize
 db.Sequelize = Sequelize

module.exports = db