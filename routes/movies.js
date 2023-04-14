const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/movies')

router.get('/', moviesController.index)

router.get('/new', moviesController.new)

router.post('/', moviesController.create)

router.get('/:id', moviesController.show)

module.exports = router;