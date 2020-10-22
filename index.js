const express = require('express');

const app = express();

const movies = [
    { "title": "Joker", "year": 2019, "rating": 8.5 },
    { "title": "Birdbox", "year": 1985, "rating": 6.6 },
    { "title": "spy", "year": 2015, "rating": 7 },
    { "title":"I Am Legend", "year": 2007, "rating": 7.2 }
]

app.get('/movies/add',(req,res)=>{
    res.status(200).send('add');
})

app.get('/movies/get/',(req,res)=>{
    res.status(200).send(movies)
})

app.get('/movies/get/by-date',(req,res)=>{
    sortedMovies = movies.sort((a,b)=>a.year - b.year)
    res.status(200).send(sortedMovies)
})

app.get('/movies/get/by-rating',(req,res)=>{
    sortedMovies = movies.sort((a,b)=>a.rating - b.rating)
    res.status(200).send(sortedMovies)
})

app.get('/movies/get/by-title',(req,res)=>{
    sortedMovies = movies.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)); 
    res.status(200).send(sortedMovies)
})

app.get('/movies/edit',(req,res)=>{
    res.status(200).send('edit');
})

app.get('/movies/delete',(req,res)=>{
    res.status(200).send('delete'); 
})
const PORT = process.env.port || 5000;

app.listen(PORT, ()=>{console.log(`SERVER STARTED ${PORT}`)})