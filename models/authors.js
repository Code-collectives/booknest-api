import { Schema, model } from "mongoose";

const authorSchema = new Schema({
    firstName : { type:String, required: true},
    lastName : { type: String, required: true},
    bio : { type:String, required: true}

});


export const  AuthorModel = model('Author' , authorSchema);