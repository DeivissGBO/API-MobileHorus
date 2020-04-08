const mongoose = require('../../src/database');
    
const Levantamento = require('../../src/app/models/levantamento');




describe('Levantamento', () => {
    beforeAll(async () => {
        if (!process.env.MONGO_URL) {
            throw new Error('MongoDB server not initialized')
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

    beforeEach(async () => {
        await Levantamento.deleteMany({});
    });


    it('should create a Levantamento', async () => {
        await Levantamento.create({
            name: "Novo Levantamento",
            identificacao_cliente: "O brabo",
            endereco: "Rua dos bobos, n° 0",
            contato: "92707070"
        });
        const listLevantamento = await Levantamento.find({});

        expect(listLevantamento).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: "Novo Levantamento",
                    identificacao_cliente: "O brabo",
                    endereco: "Rua dos bobos, n° 0",
                    contato: "92707070"
                }),
            ]),
        );
    });


})
