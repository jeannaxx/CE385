const express = require('express');
const app =express();

app.get ('/',(req,res)=>{
    res.send('Hello exprees www.com');
});

app.listen(8000,()=>{
    console.log('Sever runnig on http://localhost:8000');
});