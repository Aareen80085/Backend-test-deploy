const express = require('express');
const app = express();

app.use(express.json());

app.post('/sendData',(req,res)=>{
    const data = req.body;
    console.log(data)
res.send('Post request received')
})
app.get('/getData',(req,res)=>{
    res.send('Get request received')
    res.json(data)
})


app.listen(2000,()=>{
    console.log('The server is running at local host 2000')
})
