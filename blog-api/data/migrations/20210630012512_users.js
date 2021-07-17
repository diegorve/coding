// Este archivo sirve como registro de los cambios de la BD.
exports.up = function(knex) {
    // Aqui voy a escribir los cambios que quiero hacer en mi BD.
    return knex.schema.createTable('users', function(table) {
        table.increments() // Esto crea automáticamente el id y a parte es el primary key
        table.string('first_name', 150)
        table.string('last_name', 150)
        table.string('email', 150)
        table.date('birthdate')
        table.enu('gender', ['male', 'female', 'other'])
    })
};

exports.down = function(knex) {  // knex migrate:rollback ejecuta este comando
    // Aqui voy a escribir código que revierta los cambios de arriba.
    return knex.schema.dropTableIfExist('users')  // Esto borra la tabla si existe.
};
