const express = require('express')

const app= express()

app.get('/hola',function(req,res){
    res.send('Hola Mundo!!')
})

app.listen(3000)

