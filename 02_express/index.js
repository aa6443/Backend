import express from "express"

const app = express()

const port = 3000

app.use(express.json())
let teaData  = []
let nextId = 1
// Add a new Tea
app.post("/teas",(req,res)=>{

    const {name,price} = req.body
    const newTea = {id: nextId++, name, price }
    teaData.push(newTea)
    res.status(201).send(newTea)
})
//get all tea
app.get("/teas",(req,res)=>{
    res.status(200).send(teaData)
})
//get a tea with id 
app.get("/teas/:id",(req,res)=>{
    const tea = teaData.find(t =>t.id === parseInt(req.params.id))
    if(!tea){
        return res.status(404).send('Tea not found')
    }
    res.status(200).send(tea)
})
//update a tea 
app.put('/teas/:id',(req,res) =>{
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if(!tea){
        return res.status(404).send("Tea not found")
    }
    const {name,price} = req.body
    tea.name = name 
    tea.price = price
})
//delete a tea
app.delete('/teas/:id', (req,res) =>{
    const index = teaData.findIndex(t=> t.id === parseInt(req.params.id))
    if(index === -1){
        return res.status(404).send("tea not found")
    }
    teaData.splice(index,1)
    res.status(204).send('deleted')
})


/*
app.get("/",(req,res) =>{
    res.send("Hello from Aniket and his tea!")
})
app.get("/ice-tea",(req,res)=>{
    res.send("What Ice tea would you prefer?")
})
app.get("/twitter",(req,res)=>{
    res.send("iamaniket9")
})
*/


app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`)
})
