import mongoose from "mongoose";

interface Todo {
    title : string,
    description : string,
    status : string
}

const todoSchema = new mongoose.Schema<Todo>({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true
    }
})
export const Todo = mongoose.model('Todo',todoSchema);