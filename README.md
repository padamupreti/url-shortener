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

### Option 1 (Sqlite)

To quickly try the application, it may be run with a sqlite3 instance. \
To do this, make the following changes in [config/database.js](config/database.js)

```javascript
const sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logging: false,
})
```

Then, to start the app locally:

```
npm start
```

With this option, a `database.sqlite` is created at projet root.

### Option 2 (PostgreSQL)

For practical usage, a [PostgreSQL](https://www.postgresql.org/) database is preferred over sqlite.
For this option, no modification of [config/database.js](config/database.js) is needed.
Dependencies for PostgreSQL support should have installed during the setup step.

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

### Other options

As this project uses Sequelize ORM, other databases supported by it can be used.
This approach requires changing some dependencies and possible additonal configurations.
For more information, visit [Sequelize ORM Documentation](https://sequelize.org/docs/v6/getting-started/).
