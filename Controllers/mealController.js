//mealController.js

Meal = require('../Models/MealsModel')

exports.index = function (req, res) {
    Meal.get(function (err, meal) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got meal Successfully!",
            data: meal       
        });
    });
};

// New Meal
exports.add = function (req, res) {
    var meal = new Meal();
    meal.name = req.body.name? req.body.name: meal.name;
    meal.meal_id = req.body.meal_id;
    meal.ingredients = req.body.ingredients;


    meal.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "New Meal Added!",
            data: meal
        });
    });
};

// View Meal
exports.view = function (req, res) {
    Meal.findById(req.params.meal_id, function (err, meal) {
        if (err)
            res.send(err);
        res.json({
            message: 'Meal Details',
            data: meal
        });
    });
};

// Update Meal
exports.update = function (req, res) {
    Meal.findById(req.params.meal_id, function (err, meal) {
        if (err)
            res.send(err);
        meal.name = req.body.name ? req.body.name : meal.name;
        meal.meal_id = req.body.meal_id;
        meal.ingredients = req.body.ingredients;


        meal.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Meal Updated Successfully",
                data: meal
            });
        });
    });
};

// Delete Meal
exports.delete = function (req, res) {
    Meal.deleteOne({
        _id: req.params.meal_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Meal Deleted'
        })
    })
}