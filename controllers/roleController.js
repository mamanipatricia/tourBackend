const roleModel = require('../models/').role;
const permissionModel = require('../models/').permission;

async function showRoles() {
    return await roleModel.findAll({
        include: [
            {
                model: permissionModel,
            }
        ]
    });
}


module.exports = {
    showRoles,
}
