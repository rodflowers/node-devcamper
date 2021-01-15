const express = require("express");

const {
    getBootcamps,
    getBootcamp,
    createBootcamps,
    updateBootcamps,
    deleteBootcamps,
    getBootcampsInRaius,
    bootcampUploadPhoto
} = require("../controllers/bootcamps");

const Bootcamp = require('../models/Bootcamp');
const advancedResults = require('../middleware/advancedResults');

// Include other resourse routers
const courseRouter = require('./courses');

const router = express.Router();

// Re-route into other resourse routers
router.use('/:bootcampId/courses', courseRouter)

router
    .route("/")
    .get(advancedResults(Bootcamp, 'courses'), getBootcamps) 
    .post(createBootcamps);

router
    .route("/:id")
    .get(getBootcamp)
    .put(updateBootcamps)
    .delete(deleteBootcamps);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRaius);

router.route('/:id/photo').put(bootcampUploadPhoto);

module.exports = router;
