import express from "express"
import cors from "cors"
import main from "./initData/index.js"
import ExpressError from "./utils/ExpressError.js"
import animalRouter from "./routes/animal.js"
const app=express()
const port=8080
main()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use("/",animalRouter)
app.get("/error", (req, res, next) => {
    throw new ExpressError(403, "Access is forbidden")
})
app.use((err,req,res,next) => {
    let {status=100,message="some error occured"}=err
    res.status(status).send(message)
})
app.listen(port,() => {
    console.log(`server is listening at port ${port}`)
})