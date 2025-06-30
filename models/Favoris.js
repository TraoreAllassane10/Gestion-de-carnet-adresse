const mongoose = require('mongoose');
const {Schema} = mongoose;

const favorisSchema = new Schema({
    user : {
        type : mongoose.Types.ObjectId,
        ref : 'User'
    },
    contact : {
        type : mongoose.Types.ObjectId,
        ref : 'Contact'
    }
},
{
    timestamps : true
});

module.exports = mongoose.model('Favoris', favorisSchema);