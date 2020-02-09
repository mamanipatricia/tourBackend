const jwt = require('jsonwebtoken');
const userModel = require('../models/').user;

async function login(body) {
    const username = body.username;
    const password = body.password;
    return await userModel.findOne({ where: { username: username, password: password } })
        .then(user => {
            if (!user) throw "NO EXSTE USUARIO"
            const token = jwt.sign(JSON.parse(JSON.stringify(user)), 'secret');
            return {"access_token": token}
        })
        .catch(err => { console.log(err) });

}

module.exports = {
    login,
}