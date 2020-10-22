const { response } = require('express');
const express = require('express');

const app = express();

const movies = [
    { "title": "Jaws", "year": 1975, "rating": 8 },
    { "title": "Avatar", "year": 2009, "rating": 7.8 },
    { "title": "Brazil", "year": 1985, "rating": 8 },
    { "title":"الإرهاب والكباب‎", "year": 1992, "rating": 6.2 }
]

// ADD

// app.get('/search?q=tobi+ferret',(req,res)=>{
//     res.send(req.query.q    )
//     res.status(200).send(req.query.title);
// })


// /search?q=tobi+ferret

app.get('/movies/add',(req,res)=>{

    if(Object.keys(req.query).length === 0){
        res.send('add')
    }
    else{
        if(req.query.title===undefined || req.query.year === undefined || isNaN(req.query.year) || req.query.year.length!==4 || req.query.rating === null){
            res.status(403).send("{status:403, error:true, message:'you cannot create a movie without providing a title and a year'}")
        }else{
            if(req.query.rating===null || req.query.rating === undefined){
                req.query.rating=4;
            }
            let x = req.query;
            movies.push(x)
            res.send(movies)
        }
      
    }

})



// GET

app.get('/movies/get/',(req,res)=>{
    res.status(200).send(movies)
})

app.get('/movies/get/by-date',(req,res)=>{
    let sortedMovies = movies.sort((a,b)=>a.year - b.year)
    res.status(200).send(sortedMovies)
})

app.get('/movies/get/by-rating',(req,res)=>{
    let sortedMovies = movies.sort((a,b)=>a.rating - b.rating)
    res.status(200).send(sortedMovies)
})

app.get('/movies/get/by-title',(req,res)=>{
    let sortedMovies = movies.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)); 
    res.status(200).send(sortedMovies)
})

// Edit

app.get('/movies/edit',(req,res)=>{
    let movieList = movies.map(movie=>`{Movie: ${movie.title},Year: ${movie.year},Rating: ${movie.rating}}`)
    res.status(200).send(`${movieList}`);
})

app.get('/movies/edit/id/:title',(req,res)=>{

    let movieTitle = movies.map(movie=>movie).filter(movie=>movie.title===req.params.title);

    if(movieTitle){
        if(movieTitle.length < 1){
            res.status(404).send(`{status:404, error:true, message:'the movie ${req.params.title} does not exist'}`)
        }else{
            res.status(200).send(`{status:200, data: Movie: ${movieTitle[0].title}, Year: ${movieTitle[0].year}, Rating: ${movieTitle[0].rating}}`)
        }
    }
})



app.get('/movies/delete',(req,res)=>{
    res.status(200).send('delete'); 
})




const PORT = process.env.port || 5000;

app.listen(PORT, ()=>{console.log(`SERVER STARTED ${PORT}`)})