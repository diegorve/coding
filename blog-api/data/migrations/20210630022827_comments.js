
exports.up = function(knex) {
    return knex.schema.createTable('comments', function(table) {
        table.increments()
        table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade')  // Esto crea la llave foranea.
        table.integer('post_id').notNullable().references('id').inTable('posts').onDelete('cascade')  // Esto crea la llave foranea.
        table.text('body', 'longtest')        
    }) 
};

exports.down = function(knex) {
    return knex.schema.dropTableifExist('comments')
};
