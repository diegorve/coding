// Update with your config settings.
require('dotenv').config(); // esto va a cargar las variables de entorno

// Aqui se configuran los diferentes ambientes que se van a utilizar en el ciclo de vida de mi proyecto

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DB_URL,  // process.env es como nodejs encuentra las variables de entorno.
    migrations: {
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds' }
  },

  staging: {
    client: 'pg', // cambiar sqlite3 por pg
    connection: process.env.DB_URL,  // Esta es una variable de entorno. Estas son variables que no viven en el programa como tal, sino en el sistema operativo que se esta usando. porcess.env es como nodejs encuentra las variables de entorno.
    // Incorporar esta parte
    migrations: {
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds' }
  },

  production: {
    client: 'pg', // cambiar sqlite3 por pg
    connection: process.env.DB_URL,  // Esta es una variable de entorno. Estas son variables que no viven en el programa como tal, sino en el sistema operativo que se esta usando. porcess.env es como nodejs encuentra las variables de entorno.
    // Incorporar esta parte
    migrations: {
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds' }
  }

};
