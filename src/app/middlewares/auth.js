const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');
module.exports=(request, response, next) =>{
//recebe uma requisição, respossta e next
//chama next somente se o usuario esta pronto para ir para o proximo passo

    const authHeader = request.headers.authorization;

    if(!authHeader)
        return response.status(401).send({error: 'token nao provido'});

    const parts = authHeader.split(' ');

    if(!parts.length ===2)
        return response.status(401).send({error: 'token error'});
        
    //scheme= bearer, token = token
    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme))
        return response.status(401).send({error: 'Token malformatado'});
     


    jwt.verify(token, authConfig.secret, (err,  decoded )=> {
        if(err) return response.status(401).send({error: 'token invalido'});

    request.userId = decoded.id; 

    return next();
    });
        

};