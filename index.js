const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('ok')
})


app.get('/test',(req,res) => {
    res.status(200).send('{status:200, message:"ok"}')
})


app.get('/time',(req,res) => {

    const hourDate = new Date();
    const h = hourDate.getHours();
    const m = hourDate.getMinutes();
    const s = hourDate.getSeconds();
    const time = `${h}:${m}:${s}`;

    res.status(200).send(`{status:200, message:"${time}"}`)
})


app.get('/test',(req,res) => {
    res.status(200).send('{status:200, message:"ok"}')
})

app.get('/hello/:id?',(req,res) => {

    if(req.params.id === undefined){
        res.status(200).send(`{status: 200, message: Hello}`);
    }
    else{
        res.status(200).send(`{status: 200, message: Hello, ${req.params.id}}`)
    }
})

app.get('/search',(req,res) => {
    
    if(req.query.s===undefined){
        res.status(500).send({status:500, error:true, message:"you have to provide a search"});
    }else{
        res.status(200).send(`{status:200, message:"ok", data:${req.query.s}}`)
    }
    
})


const PORT = process.env.port || 5000;

app.listen(PORT, ()=>{console.log(`SERVER STARTED ${PORT}`)})