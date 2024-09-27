const mongoose =require('mongoose')

const dataSchema = new mongoose.Schema({
    gram:String,
    carat:String,
    price18:String,
    price22:String,
    price24:String
});

const datamodel = mongoose.model('grdata',dataSchema);
module.exports = datamodel;