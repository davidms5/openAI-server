import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({path: 'back/config.env'});


import connectDB from './mongodb/connect.js'

const app = express();
console.log(process.env.MONGODB_URL)
app.use(cors());
app.use(express.json({limit: '50mb'}));//en este caso ese limite es para las fotos que traiga dall-e


app.get('/',async(req,res) =>{
  res.send('hola mundo');
});

//const database = process.env.MONGODB_URL;
const startServer = async() =>{

  try{
   await connectDB(process.env.MONGODB_URL);
    app.listen(8000, ()=> console.log(`server iniciado en el puerto ${8000}`))
  } catch (error){
    console.log(error)
  }
  
}

startServer();
