// username, email and password 
// pantry and favourites 
// send it to Firebase/MongoDB atlas and associate with user

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: 
    {
        type: String,
        maxlength: 20,
        // unique: [true, 'Username has to be unique'],
        // required: [true, 'Username cannot be empty']
    },
    email: 
    {
        type: String,
        // unique: [true, 'Email has to be unique'],
        // required: [true, 'Email cannot be empty']
    },
    password: 
    {
        type: String,
        minlength: 6,
        // required: [true, 'Password cannot be empty']
    },
    // pantry: [String],
    // favourites: [String],
    // userimg:
    // {
    //     data: Buffer,
    //     contentType: String
    // },
    created: 
    { 
        type: Date,
        required: [true, 'Creation date is required']
    }
});

module.exports = mongoose.model('User', userSchema);