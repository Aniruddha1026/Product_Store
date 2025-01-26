const express=require('express')
const dotenv=require('dotenv')
const app=express()
const connectDB = require('./db.js')
const productRoutes=require('./routes/product.routes.js')
const path=require('path')

const port=process.env.PORT || 5000
dotenv.config()

app.use(express.json())

app.use('/api/products',productRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })
}

app.listen(port,() =>{
    connectDB();
    console.log("Server is running in port "+ port);
})
