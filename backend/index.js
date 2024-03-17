import dotenv from 'dotenv';
import connectDB from "./src/db/database.js";
import app,{httpServer} from './app.js';

dotenv.config({path:"./.env"});

connectDB()
.then(()=>{
  httpServer.listen(process.env.PORT || 8000,()=>{
    console.log(`server is running at port : ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("mongoDB connection Failed",err)
})

