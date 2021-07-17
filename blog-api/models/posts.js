// Aqui se escriben funciones que realizan los CRUD
const db = require('../data/db');


module.exports = {
    findAll: () => {
        return db('posts')  
    },

    find0ne: (id) => {        
        return db('posts').where({id})
    },

    create: (data) => {
        return db('posts').insert(data, ['id', 'title', 'created_at'])
    },

    update: (id, data) => {
        return db('posts').where({id}).update(data, ['id', 'title', 'body', 'user_id', 'created_at', 'category'])
    },

    delete: (id) => {
        return db('posts').where({id}).del()
    }
}