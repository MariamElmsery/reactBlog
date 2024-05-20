
import * as mongoose from 'mongoose'


export const userSchema=new mongoose.Schema({
    image:String,
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"posts"
    }],
    isAdmin: { type: Boolean, default: false }
})