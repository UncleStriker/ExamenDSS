const jwt = require('jsonwebtoken')

const authenticate =(request, response, next) => {
    if(request.headers['authorization']==undefined){
        return response.sendStatus(401)
    }
    const authHeader = request.headers['authorization']
    token = authHeader && authHeader.split(' ')[1]
    if(token == null){
        return response.sendStatus(401)
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user) => {
        if(err){
            return response.sendStatus(401)
        }
        console.log(user)
        next()
    })
};

module.exports = {authenticate}

// if (request.body.token !== process.env.TOKEN){
    //     console.log("Credenciales erroneas")
    // }else{
    //     console.log('Credenciales Correctas!!')
    //     next();
    // }