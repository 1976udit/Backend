// import express from 'express'         both line 1 and 2 has same meaning

const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000;

app.get('/', (req , res) => {
     res.send("Happy Diwali");
})

app.get('/insta', (req,res) => {
     res.send("This is insta page");
})

app.get('/login', (req , res) => {
    res.send("<h1>This is Login Page</h1>")
})

app.listen(port , () => {
    console.log(`Eample of port ${port}`)
})