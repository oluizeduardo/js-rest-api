const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database')
const app = express()

const PORT = 3000

// Required when using urlencoded format.
// Exemple: Send a through
app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT, () => {
    console.log('Server listening to at ' + PORT)
})

// Create
app.post('/products', (req, res) => { 
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    }
    const product = database.saveProduct(newProduct)
    res.send(product) // Converts to JSON.
})

// Recover
app.get('/products', (req, res) => { 
    res.send(database.getProducts()) // Converts to JSON.
})

// Update
app.put('/products/:id', (req, res) => { 
    const newProduct = {
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    }
    const product = database.saveProduct(newProduct)
    res.send(product) // Converts to JSON.
})

// Delete
app.delete('/products/:id', (req, res) => { 
    const productID = req.params.id
    res.send(database.deleteProduct(productID)) // Converts to JSON.
})

app.get('/products/:id', (req, res) => { 
    const productID = req.params.id
    res.send(database.getProduct(productID)) // Converts to JSON.
})