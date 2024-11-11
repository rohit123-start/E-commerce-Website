const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()

app.get('/',(req,res)=> {
    res.status(200).json({msg:"Hello World"})
})

app.listen(process.env.PORT,()=>{
    console.log(`PORT is running on ${process.env.PORT}`)
})

module.exports = app