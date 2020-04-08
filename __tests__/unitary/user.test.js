const mongoose = require('../../src/database');
const User = require('../../src/app/models/user');
const request = require('supertest');
const app = require('../../src/index');
bcrypt = require('bcryptjs');




describe('User', () => {
    beforeAll(async () => {
        if (!process.env.MONGO_URL) {
            throw new Error('MongoDB server not initialized');
        }
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            userUnifiedTopology: true,
            useCreateIndex: true,
        });
    });
    afterAll(async () => {
        await mongoose.connection.close();
    });

   /* it('should return created user', async () => {
        await User.create({ name: "Deivissin", email: "deivissinvl@gmail.com", password: "101198" });

        const list = await User.find({});

        expect(list).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: "Deivissin",
                    email: "deivissinvl@gmail.com",
                }),
            ]),
        );
    });*/
    it('should not athenticate user by http request (invalid email)', async () => {


        const response = await request(app)
            .post('/auth/authenticate')
            .send({
                email: "deivi123@gmail.com",
                password: "33972812"
            });

        expect(response.status).toBe(400);
    }),

    it('should register an user by http request', async () => {
        const response = await request(app)
            .post('/auth/register')
            .send({
                name: "test http request",
                email: "testhttprequest@gmail.com",
                password: "testhttpresquest"
            })



        expect(response.body.user.name).toEqual("test http request");

    }),

    it('should not register an user by http request(email ja cadastrado)', async () => {
        const response = await request(app)
            .post('/auth/register')
            .send({
                name: "test http request",
                email: "testhttprequest@gmail.com",
                password: "testhttpresquest"
            })

        //console.log(response.body.error);

        //expect(response.body.user.name).toEqual("test http request");
        expect(response.body.error).toEqual("email já cadastrado")

    }),
    it('should not athenticate user by http request (invalid password)', async () => {


        const response = await request(app)
            .post('/auth/authenticate')
            .send({
                email: "testhttprequest@gmail.com",
                password: "senhainvalida"
            });

       // console.log(response.body.error)
        expect(response.body.error).toEqual('Senha inválida');
    })

    it('should athenticate user by http request(valid credentials)', async()=>{
        const response = await request(app)
        .post('/auth/authenticate')
        .send({
            
            email: "testhttprequest@gmail.com",
            password: "testhttpresquest"
        });
       // console.log(response.body)
        expect(response.body.user.name).toEqual("test http request");
    }),

    
    it('should not register an user by http request(invalid params)', async () => {
        const response = await request(app)
            .post('/auth/register')
            .send({
                1:"1",
                1:"2"
            })
        //console.log(response.body.error);
        //expect(response.body.user.name).toEqual("test http request");
        expect(response.body.error).toEqual("Falha ao registrar")
    })
});