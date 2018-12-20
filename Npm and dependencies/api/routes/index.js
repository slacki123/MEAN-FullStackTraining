var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');
var ctrlReviews = require('../controllers/reviews.controllers.js');

router
.route('/hotels')
.get(ctrlHotels.hotelsGetAll)
.post(ctrlHotels.hotelsAddOne);

//hotelId is a pointer or something xD
router
.route('/hotels/:hotelId')
.get(ctrlHotels.hotelsGetOne);

//Review routes
router
.route('/hotels/:hotelId/reviews')
.get(ctrlReviews.reviewsGetAll)
.post(ctrlReviews.reviewsAddOne);

router
.route('/hotels/:hotelId/reviews/:reviewId')
.get(ctrlReviews.reviewsGetOne);


module.exports = router;