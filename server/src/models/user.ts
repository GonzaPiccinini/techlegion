import { Schema, model } from 'mongoose'
import { UserWithPassword } from '../interfaces'

const UserSchema = new Schema<UserWithPassword>({
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    firstName: {
        type: String,
        required: [true, 'firstName is required']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const UserModel = model('users', UserSchema)
export { UserModel }