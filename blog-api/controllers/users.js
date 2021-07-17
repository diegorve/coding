const { findAll, findOne, create, update, delete:remove } = require('../models/users');  // Si hay dos variables que se llamen igual por ejemplo la palabra reservada delete se puede sustituir asi: delete:remove (remove o cualquier otra palabra)


module.exports = {
    fetch: (req, res) => {
        findAll().then((users) => res.status(200).json(users))
    },
    retrieve: (req, res) => {
        findOne(req.params.id).then((user) => {
            res.status(200).json(user)
        }).catch((error) => {
            res.status(400).json(error)
        })
    },
    add: (req, res) => {
        create(req.body).then((user) => {
            res.status(201).json(user)
        }).catch((error) => {
            res.status(400).json(error)
        })
    },
    modify: (req, res) => {
        update(req.params.id, req.body).then((user) => {
            res.status(200).json(user)
        }).catch((error) => {
            res.status(400).json(error)
        })
    },
    eliminate: (req, res) => {
        remove(req.params.id).then(() => {
            res.status(204)
        }).catch((error) => {
            res.status(400).json(error)
        })
    }
}
