const cityTourModel = require('../models/').city_tour;

async function displayCityTour() {
    return await cityTourModel.findAll();
}


module.exports = {
    displayCityTour,
}
