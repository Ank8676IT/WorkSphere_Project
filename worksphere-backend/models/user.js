const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId: {
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password: {
        type: String,
    },
    f_name: {
        type: String,
        default: ""
    }, 
    headline: {
        type: String,
        default: ""
    },
    curr_compnay: {
        type: String,
        default: ""
    },
    curr_location: {
        type: String,
        default: ""
    },
    profilePic: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    },
    cover_pic: {
        type: String,
        default: "https://i.pinimg.com/736x/15/61/58/1561587aef2154176057c566903f1abe.jpg"
    },
    about: {
        type: String,
        default: ""
    },
    skills: {
        type: [String],
        default: [],
    },
    experience: [
        {
            desination: {
                type: String,
            },
            company_name: {
                type: String,
            },
            duration: {
                type: String,
            },
            location: {
                type: String,
            },
        }
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        }
    ],
    pending_friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        }
    ],
    resume: {
        type: String,
    },
},{timestamps:true})

const userModel = mongoose.model('user',UserSchema);
module.exports = userModel;