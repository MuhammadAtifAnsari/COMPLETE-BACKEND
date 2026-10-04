import mongoose from "mongoose";

const userSchema = new mongoose.Schema({                // create strucure for db collection  
    _id: {type: mongoose.Schema.ObjectId, required: true},
    username: {type: string, required: true},
    email: {type: string, required: true},
});


const User = mongoose.model( 'User', userSchema );      // create collection in db

export default User;