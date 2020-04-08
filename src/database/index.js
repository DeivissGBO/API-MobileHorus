const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://deivisson:deivisson@cluster0-lce1u.mongodb.net/mobile?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;
    
module.exports = mongoose;