import {Response, Request} from 'express';
import { Todo } from '../models/todo';

export async function addTodo(req : Request,res : Response) : Promise<void>{
   try{
    const {title, description, status} = req.body;

    if(!title || !description || !status){
        
        res.status(400).json({message : "Please enter all fields"});
        return;
    }

    const todo =  new Todo({
        title,
        description,
        status
    })

    await todo.save();
    res.status(200).json({message : "Todo added successfully"});
    return;
   }catch(e){
    res.status(500).json({message : "Internal server error"});
    return;
   }
}

export async function getAllTodos(req : Request, res : Response) : Promise<void>{
    try{
        const todos = await Todo.find();
        res.status(200).json({data : {
            todos
        }});
        return;
    }catch(e){
        res.status(500).json({message : "Internal server error"});
        return;
    }
}

export async function getTodoById(req : Request, res : Response) : Promise<void>{
    try{
        const {id} = req.params;
        const todo = await Todo.findById(id);
        if(!todo){
            res.status(404).json({message : "Todo not found"});
            return;
        }else{
            res.status(200).json({data : {
                todo
            }});
            return;
        }
    }catch(e){
        res.status(500).json({message : "Internal server error"});
        return;
    }
}

export const deleteTodo = async (req : Request, res : Response) : Promise<void> => {
    try{
        const {id} = req.body;
        console.log(id);
        const todo = await Todo.findById(id); 
        if(!todo){
            res.status(404).json({message : "Todo not found"});
            return;
        }
        console.log(todo);
        await Todo.findByIdAndDelete(id);
        res.status(200).json({message : "Todo deleted successfully", todo : todo});
    }catch(e){
        res.status(500).json({message : "Internal server error"});
        return;
    }
}