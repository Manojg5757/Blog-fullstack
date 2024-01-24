import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(json())



mongoose.connect(process.env.MONGO)
.then(()=>console.log("connected to mongodb"))
.catch((err)=>{
    console.log(err)
})

app.get('/',(req,res)=>{
    res.send("master")
})

app.listen(3001,()=>{
    console.log("Manoj")
})