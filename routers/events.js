const express = require ('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');


//[GET] events/ (index)
//[POST] events/ (store)
//[PUT] events/:event (update)

//index
router.get('/index', eventsController.index);
//show
router.get('/show/:id', eventsController.show)
//store
router.post('/store', eventsController.store);
//update
router.put('/:event', eventsController.update);


module.exports = router