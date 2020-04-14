const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: "7d"

    });

}

router.post('/register', async (request, response) => {
    try {
        const { email } = request.body;
        if (await User.findOne({ email }))
            return response.status(400).send({ error: "email já cadastrado" });
        const user = await User.create(request.body);

        user.password = undefined;

        return response.send({
             user,
             token: generateToken({id:user.id}),
             });
    } catch (err) {
        return response.status(400).send({ error: 'Falha ao registrar' });
    }

});

router.post('/authenticate', async (request, response) => {
    const { email, password } = request.body;
    console.log(request)
    //no model deixamos senha como n selecionavel por isso precisa selecionar aqui
    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return response.status(400).send({ error: "Usuario não encontado" });

    if (!await bcrypt.compare(password, user.password))
        return response.status(400).send({ error: "Senha inválida" });


    user.password = undefined;

    response.send({
        user,
        token :generateToken({id: user.id})
    });
});

//todas as rotas de auth serao prefixada com '/auth'
module.exports = app => app.use('/auth', router);