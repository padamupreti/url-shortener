const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env
const sequelize = new Sequelize(
    `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false }
)

// ensure database connection
sequelize
    .authenticate()
    .then(() => console.log('Connection to DB successful! 🔗'))
    .catch((err) => {
        console.error('Error connecting to DB: ', err)
        process.exit(1)
    })

module.exports = sequelize
