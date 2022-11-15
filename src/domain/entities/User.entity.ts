import mongoose, { mongo } from "mongoose";

export const userEntity = () => {
    let userSchema = new mongoose.Schema({
        name: String,
        email: String,
        age: Number,
    })

    return mongoose.models.Users || mongoose.model('Users', userSchema)
}