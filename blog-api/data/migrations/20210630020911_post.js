
exports.up = function(knex) {
    return knex.schema.createTable('posts', function(table) {
        table.increments()
        table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade')  // Esto crea la llave foranea.
        table.string('title', 200)
        table.text('body', 'longtext')
        table.timestamps('created_at') // timestamps crea dos campos en la base de datos, uno para creación y otro para modificación.
        table.string('category', 100)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableifExist('posts')
};
