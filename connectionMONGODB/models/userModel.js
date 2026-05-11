const {Schema,model}= require("mongoose");

//A Schema defines the structure of your document — fields, types, and rules.
const userSchema = new Schema({
    name:{
        type:String,
        required: true,
        maxlength: 50
    },
    age:{
        type:Number,
        required: true
        
    },
    weight:{
        type:Number,
       
    },
    createdAt:{
        type: Date,
        default:Date.now
    }
});

const UserModel = model('User',userSchema);
//A Model is a class built from the Schema. It gives you methods to interact with the collection.

module.exports = UserModel; 