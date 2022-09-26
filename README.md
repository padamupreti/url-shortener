# url-shortener

A simple url shortener.

![Screenshot](https://i.imgur.com/J5M9J8L.png)

## Requirements

-   [Node.js](https://nodejs.org/en/download/ 'Download Node.js') (with npm)

## Setup

To install dependencies, navigate to project root in the terminal and run:

```
npm i
```

After installation of dependencies, proceed with one of two options given below:

### Option 1

To quickly try the application, it may be run with a sqlite3 instance in memory. \
To do this, make the following changes in [config/database.js](config/database.js)

```javascript
const sequelize = new Sequelize('sqlite::memory:', { logging: false })
```

Then, to start the app locally:

```
npm start
```

**NOTE:** With this option, all created data only persists as long as the app is not terminated

### Option 2

To ensure all data created by application remains on disk, a [PostgreSQL](https://www.postgresql.org/) database is required. For this option, no modification of [config/database.js](config/database.js) is required.

The credentials for database connection are to be stored in a `.env` file created at the root of the project in the following format:

```
DB_USERNAME=<postgres-db-username-here>
DB_PASSWORD=<postgres-db-password-here>
DB_NAME=<postgres-db-name-here>
```

Then, to start the app locally:

```
npm start
```

As this project uses Sequelize ORM, other databases supported by it can be used. This approach requires changing some dependencies and possible additonal configurations. For more information, visit [Sequelize ORM Documentation](https://sequelize.org/docs/v6/getting-started/).
