const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const dbname = process.env.DB_NAME

const sequelize = new Sequelize(
    `postgres://${username}:${password}@localhost:5432/${dbname}`,
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
