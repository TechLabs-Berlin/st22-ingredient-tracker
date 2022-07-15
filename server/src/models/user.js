// username, email and password 
// pantry and favourites 
// send it to Firebase/MongoDB atlas and associate with user

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username:
    {
        type: String,
        // unique: [true, 'Username has to be unique'],
        required: [true, 'Username cannot be empty'],
        // validate: {
        //     validator: username => User.doesNotExist({ username }),
        //     message: "Username already exists"
        //   }
    },
    email:
    {
        type: String,
        // unique: [true, 'Email has to be unique'],
        required: [true, 'Email cannot be empty'],
        // validate: {
        //     validator: email => User.doesNotExist({ email }),
        //     message: "Email already exists"
        //   }
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
    try {
        const user = await this.findOne({ email });
        console.log(`Found user ${user.username}`);
        const validCredentials = await bcrypt.compare(password, user.password);
        return validCredentials ? user : false;
    }
    catch (err) {
        console.log(`Error ocurred ${err}`);
    }
};

// userSchema.statics.doesNotExist = async function (field) {
//     return await this.where(field).countDocuments() === 0;
//   };

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
// const User = mongoose.model('User', userSchema);
// export default User;