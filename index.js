const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('ok')
})


app.get('/test',(req,res) => {
    res.send('{status:200, message:"ok"}')
})


app.get('/time',(req,res) => {

    const hourDate = new Date();
    const h = hourDate.getHours();
    const m = hourDate.getMinutes();
    const s = hourDate.getSeconds();
    const time = `${h}:${m}:${s}`;

    res.send(`{status:200, message:"${time}"}`)

})

const PORT = process.env.port || 5000;

app.listen(PORT, ()=>{console.log(`SERVER STARTED ${PORT}`)})