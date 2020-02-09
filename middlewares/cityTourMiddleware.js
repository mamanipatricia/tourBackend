const jwt = require('jsonwebtoken')


module.exports = () => {

    function  middleware(req, res, next) {
    	let token = req.headers.authorization;
    	
    	try {
    		token = token.replace('Bearer ', '')
    		console.log("**********") 
    		console.log(token) 
    		console.log("**********") 
    		
    		jwt.verify(token, 'secret')
    		next()
    	} catch( err) {
    		res.status(401).send({error: "ERROR EN TOKEN"})
    		// next()
    	}
    }

    return middleware;
}