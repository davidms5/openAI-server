import mongoose from 'mongoose';

const connectDB = async (url) =>{
  mongoose.set('strictQuery', true); //esta parte de codigo es para poder hacer consultas, posiblemente con regex

 await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true} )
  .then(() => console.log('mongodb conectado'))
  .catch((err) => console.log(err))
}

export default connectDB;
