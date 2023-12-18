import express, {json} from "express";
import mongoose, { Mongoose }  from 'mongoose';
import { routes } from "./routes.js";

const app = express();

app.use(express.json());

const databaseUrl= "mongodb+srv://sahilwofficial:bW4fMmCW1KYtCYzo@cluster0.vjntfsb.mongodb.net/" ;
mongoose.connect(databaseUrl);

let database = mongoose.connection;
database.on('connected',()=> {
    console.log("Database connected successfully");
    app.use(routes);

app.get('/healthcheck',(req,res)=> {
    console.log("Server is running");
    res.send('Server is up and running !');
})

app.post('/sendData',(req,res)=> {
    console.log("Data being send by the client...",req.body);
    res.send("Data received successfully!");
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});
});
database.on('error',(err)=> {
    console.log("Error whilr connecting to database",err);
});
