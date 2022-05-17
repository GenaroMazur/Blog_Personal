const express=require("express")
const app=express()
const path=require("path")
const public=path.join(__dirname,"/public")

app.listen(8080,()=>{
    console.log("¡¡ Servidor Funcionando !!")
})

app.use(express.static(public))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
})