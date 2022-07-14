// username, email and password 
// pantry and favourites 
// send it to Firebase/MongoDB atlas and associate with user

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username:
    {
        type: String,
        maxlength: 20,
        // unique: [true, 'Username has to be unique'],
        required: [true, 'Username cannot be empty']
    },
    email:
    {
        type: String,
        // unique: [true, 'Email has to be unique'],
        required: [true, 'Email cannot be empty']
    },
    password:
    {
        type: String,
        minlength: 6,
        required: [true, 'Password cannot be empty']
    },
    groceries: [String],
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

userSchema.statics.findAndValidate = async function (email, password) {
    const user = await this.findOne({ email });
    const validCredentials = await bcrypt.compare(password, user.password);
    return validCredentials ? user : false;
}

// userSchema.statics.findAndGetGroceries = async function (user_id) {
//     const getUserGroceries = await this.findOne({ user_id }).select('groceries');
//     console.log(getUserGroceries);
//     return getUserGroceries;
// }

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

module.exports = mongoose.model('User', userSchema);