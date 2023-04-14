const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/movies')

router.get('/', moviesController.index)

router.get('/new', moviesController.new)

router.post('/', moviesController.create)

router.get('/:id', moviesController.show)

router.delete('/:id', moviesController.delete)

router.get('/:id/edit', moviesController.edit)

router.put('/:id', moviesController.update)

module.exports = router;