const { DataTypes } = require('sequelize')
const db = require('../config/database')

const Url = db.define('url', {
    target: DataTypes.STRING,
})

Url.sync()
    .then(() => console.log('Table synchronized with DB for model Url! 📄'))
    .catch((err) => {
        console.error('Error synchronozing with DB: ', err)
        process.exit(1)
    })

module.exports = Url
