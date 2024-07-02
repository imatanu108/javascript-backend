import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ],
    isCompleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export const Todo = mongoose.model("Todo", todoSchema);