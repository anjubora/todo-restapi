var mongoose =require('mongoose')
//var {db}=require('./../../credentials')
mongoose.Promise=global.Promise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true })

module.exports = {
    mongoose :mongoose
};
