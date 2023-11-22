import express from "express"
import random from 'random'
const app = express()

app.use(express.json())

app.get('/api/:type', (req, res) =>{
    const {type} = req.params
    console.log(type)
    const {start, end} = req.query
    console.log(start,end)
    switch (type) {
        case "float":
            res.json(random.float((Number(start)), (Number(end))))
        case "int":
            res.json(random.int((Number(start)), (Number(end))))
        default:
            res.json("Запрос не верен")

    }
})

app.listen(5000)