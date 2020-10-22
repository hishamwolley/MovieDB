const express = require('express');

const app = express();

const movies = [
    { "title": "Jaws", "year": 1975, "rating": 8 },
    { "title": "Avatar", "year": 2009, "rating": 7.8 },
    { "title": "Brazil", "year": 1985, "rating": 8 },
    { "title":"الإرهاب والكباب‎", "year": 1992, "rating": 6.2 }
]

app.get('/movies/add',(req,res)=>{
    res.status(200).send('add');
})

app.get('/movies/get/',(req,res)=>{
    res.status(200).send(movies)
})

app.get('/movies/edit',(req,res)=>{
    res.status(200).send('edit');
})

app.get('/movies/delete',(req,res)=>{
    res.status(200).send('delete'); 
})
const PORT = process.env.port || 5000;

app.listen(PORT, ()=>{console.log(`SERVER STARTED ${PORT}`)})