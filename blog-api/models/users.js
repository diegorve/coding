// Aqui se escriben funciones que realizan los CRUD
const db = require('../data/db');


module.exports = {
    // Esto va a traer todos los usuarios de la BD
    findAll: () => {
        return db('users')  
    },

    // Esto va a traer un solo usuario por tanto hay que usar un campo único
    find0ne: (id) => {        
        return db('users').where({id})
    },

    // Esto va a crear un usuario
    create: (data) => {
        return db('users').insert(data, ['id', 'email', 'first_name'])
    },

    // Esto va a hacer un update de la BD
    update: (id, data) => {
        return db('users').where({id}).update(data, ['id', 'email', 'first_name', 'last_name', 'gender', 'birthdate'])
    },

    // Esto va a borrar un registro de la BD
    delete: (id) => {
        return db('users').where({id}).del()
    }
}

// Para que el código no sea tan repetitivo se puede crear una clase y crear estos metodos
// También se puede usar un hi-order function