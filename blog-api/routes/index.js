const express = require('express');
const router = express.Router();
const { fetch, retrieve, add, modify, eliminate } = require('../controllers/users');  // --> Hacer lo mismo que para PostController para no tener problemas con el código.
const PostController = require('../controllers/posts');


// user routes
router.get('/users', fetch);
router.get('/users/:id', retrieve);
router.post('/users', add);
router.put('/users/:id', modify);  // tambien se puede usar el verbo patch en lugar de put.
router.delete('/users/:id', eliminate);

// posts routes
router.get('/posts', PostController.fetch);
router.get('/posts/:id', PostController.retrieve);
router.post('/posts', PostController.add);
router.put('/posts/:id', PostController.modify);  // tambien se puede usar el verbo patch en lugar de put.
router.delete('/posts/:id', PostController.eliminate);

module.exports = router;