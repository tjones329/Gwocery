//routes.js

//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

//Import Meal Controller
var mealController = require('./Controllers/mealController');

// meal routes
router.route('/meal')
    .get(mealController.index)
    .post(mealController.add);

router.route('/meal/:meal_id')
    .get(mealController.view)
    .patch(mealController.update)
    .put(mealController.update)
    .delete(mealController.delete);

//Export API routes
module.exports = router;