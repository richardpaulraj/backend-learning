import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
 .then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        `Server is running at PORT: ${process.env.PORT || 8000}`
    })
 })

 .catch((error)=>{
    console.log("Mongo DB Connection failed !!!", error)
 })