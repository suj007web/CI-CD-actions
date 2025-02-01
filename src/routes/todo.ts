import express from 'express';
import { addTodo, deleteTodo, getAllTodos, getTodoById } from '../controllers/todo';

const router = express.Router();


router.route("/addTodo").post(addTodo);
router.route("/getAllTodos").get(getAllTodos);
router.route("/getTodo/:id").get(getTodoById);
router.route("/deleteTodo").delete(deleteTodo);   

export default router;
