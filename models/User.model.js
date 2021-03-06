const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { 
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    avatar: {
        type: String,
        default: 'user-default.png'
    },
    posts: [
        { type: Schema.Types.ObjectId, ref: 'post' }
    ],
    friends: [
        { type: Schema.Types.ObjectId, ref: 'user' }
    ],
    receiveRequests:  [
        { type: Schema.Types.ObjectId, ref: 'user' }
    ],
    sendRequests: [
        { type: Schema.Types.ObjectId, ref: 'user' }
    ],
})
const UserModel = mongoose.model('user',UserSchema);
module.exports = { UserModel }

