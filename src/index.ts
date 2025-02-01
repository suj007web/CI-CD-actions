import express, {Express} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/todo';
import {connection }from './db/connection'

dotenv.config();

const app : Express = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(cors(
    {
        origin : 'http://localhost:5173'
    }
));

connection();

app.use('/api', router)


app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})