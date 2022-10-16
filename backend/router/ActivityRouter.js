const express = require("express");

const { createActivity, getAllActivity, getSingleActivity, deleteActivity, updateActivity } = require("../controller/ActivityController");

const router = express.Router();

router.post('/activity', createActivity);
router.get('/activity', getAllActivity);
router.get('/activity/:id', getSingleActivity);
router.delete('/activity/:id', deleteActivity);
router.put('/activity/:id', updateActivity);



  module.exports = router;
