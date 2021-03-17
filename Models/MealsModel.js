//mealModel.js
var mongoose = require('mongoose');

//schema
var mealSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    meal_id: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
});
// Export Meal Model
var Meal = module.exports = mongoose.model('meal', mealSchema);
module.exports.get = function (callback, limit) {
   Meal.find(callback).limit(limit); 
}