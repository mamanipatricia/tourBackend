const userModel = require('../models/').user;
const roleModel = require('../models/').role;
const permissionModel = require('../models/').permission;
const cityTourModel = require('../models/').city_tour;

async function displayUsers() {
    return await userModel.findAll();
}

async function displayUser(id) {
    return await userModel.findByPk(id, {
    	include: [
    		{
    			model: roleModel,
    			include:[
    			{
    				model: permissionModel 
    			}]

    		}
    	]
    });
}

async function displayUserCityTours(id) {
	return await userModel.findByPk(id, {
		include: [
			{
				model: cityTourModel
			}
		]
	})
	.then(user => {
		return user.city_tours;
	})
}



module.exports = {
    displayUsers,
    displayUser,
    displayUserCityTours,
}