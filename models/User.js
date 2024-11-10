import { model, models, Schema } from 'mongoose';


const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    role: {
        type: String,
        enum: ['studentaffair', 'judge'],
        default: 'studentaffair'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const User = models?.User || model('User', UserSchema);

export default User;
