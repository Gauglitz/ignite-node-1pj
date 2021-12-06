const { response } = require("express")
const express = require("express")
const { v4: uuidv4 } = require("uuid") //a v4 vai gerar numeros randomicos

const app = express()

app.use(express.json()) //mdware

const customers = []

/*
CPF string
name - string
id uuid
statement []
*/

app.post("/account", (req, res) => {
    const { cpf, name } = req.body //desestruturação

    const customerAlreadyExists = customers.some((customer) => customer.cpf ===cpf)

    if(customerAlreadyExists) {
        return res.status(400).json({ error: "Customer already exists!"})
    }

customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
}) 
    return res.status(201).send()

})


app.listen(3333)