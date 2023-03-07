const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const route = express.Router();
const {User, Product} = require('../model');
const user = new User();
const product = new Product();

// GET
route.get('/', (req,res)=> {
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})

route.get('/users', (req,res)=> {
    user.fetchStudents(req, res);
})

route.get('/user/:id', (req,res)=> {
    user.fetchStudent(req, res);
})

route.get('/products', (req,res)=> {
    product.fetchBooks(req, res);
})
route.get('/product: id', (req,res)=> {
    product.fetchBook(req, res);
})

// POST
// login an user
route.post('/login', bodyParser.json(), (req,res)=> {
    user.login(req, res);
});

// register an user
route.post('/register', bodyParser.json(), (req, res)=> {
    user.createStudent(req, res);
});

// Create a new product
route.post('/product', bodyParser.json(), (req,res)=> {
    product.addBook(req, res);
});

// PUT
route.put('/user/:id', bodyParser.json(), (req, res)=> {
    user.updateStudent(req, res);
})
route.put('/product/:id', bodyParser.json(), (req,res)=>{
    product.updateBook(req,res);
})

// DELETE
route.delete('/user/:id', bodyParser.json, (req, res)=> {
    user.deleteStudent(req, res);
})
route.delete('/product/:id', bodyParser.json, (req,res)=>{
    product.deleteBook(req, res);
})
module.exports = route;