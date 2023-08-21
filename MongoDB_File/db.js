const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://AdityaShrma07:adi07sharma@cluster0.utuvzwn.mongodb.net/users',
    (err, docs) => {
        if (!err) {
            console.log('databass acess')
        } else {
            console.log('error')
        }
    });



module.exports = { mongoose }