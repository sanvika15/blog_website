const express = require('express')
const mongoose = require('mongoose')
const app express()

app.set('view engine', 'ejs')
app.get('/',(req, res)=>{
    res.send("Welcome to project")
    })

app.listen(3000)