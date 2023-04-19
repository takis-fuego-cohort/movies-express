const express = require('express')
const router = express.Router()
const reviewsController = require('../controllers/reviews')

// create a new review for a movie
router.post('/movies/:movie_id/reviews', reviewsController.create)

router.post('/movies/:movie_id/reviews/api', reveiwsController.createApi)

module.exports = router;